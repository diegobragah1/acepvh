#!/usr/bin/env node
/**
 * E2E Smoke Test for ACE SEMUSA Porto Velho/RO 2026 Platform
 * Uses native Node.js and Headless Chrome via Chrome DevTools Protocol (CDP).
 * Hardened against process hangs, unexpected disconnects, and exit code swallowing.
 */

// Auto-respawn with --experimental-websocket if WebSocket is not globally available in Node
if (typeof WebSocket === 'undefined') {
  const { spawnSync } = await import('node:child_process');
  const res = spawnSync(
    process.execPath,
    ['--experimental-websocket', ...process.argv.slice(1)],
    { stdio: 'inherit' }
  );
  process.exit(res.status !== null && res.status !== undefined ? res.status : 1);
}

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, spawnSync } from 'node:child_process';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function cleanupUserDataDir(dir) {
  if (!dir || !fs.existsSync(dir)) return;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      return;
    } catch {
      if (attempt < 5) await sleep(250);
    }
  }
  console.warn(`[E2E WARNING] Could not completely remove temp profile dir ${dir} due to locked files.`);
}

// Default to failure exitCode (1) until explicitly verified
let exitCode = 1;
process.exitCode = 1;

let chromeProcess = null;
let userDataDir = null;
let server = null;
let ws = null;
let isCleanTeardown = false;

// Global fail-safe timeout guard (90 seconds)
const globalTimer = setTimeout(() => {
  console.error('[E2E FATAL ERROR] Overall E2E smoke test timed out after 90 seconds.');
  process.exitCode = 1;
  process.exit(1);
}, 90000);
globalTimer.unref?.();

try {
  const distDir = path.resolve('dist');
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Production build not found at ${indexPath}. Run "npm run build" first.`);
  }

  // 1. Start local HTTP server on random free port
  server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath.startsWith('/acepvh/')) {
      reqPath = reqPath.slice('/acepvh/'.length - 1);
    }
    const safePath = reqPath.replace(/^\/+/, '');
    let filePath = path.join(distDir, safePath === '' ? 'index.html' : safePath);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('Error loading file');
    }
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  console.log(`[E2E] Static server listening on http://127.0.0.1:${port}`);

  // 2. Launch headless Chrome with ephemeral debugging port
  const chromePath =
    process.env.CHROME_PATH ||
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  if (!fs.existsSync(chromePath)) {
    throw new Error(`Chrome binary not found at ${chromePath}`);
  }

  userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-smoke-'));
  console.log(`[E2E] Created temp user-data-dir: ${userDataDir}`);

  chromeProcess = spawn(
    chromePath,
    [
      '--headless=new',
      '--remote-debugging-port=0',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      '--disable-gpu',
      `--user-data-dir=${userDataDir}`,
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  let msgId = 1;
  const pending = new Map();
  const consoleErrors = [];
  const uncaughtExceptions = [];

  function rejectAllPending(reason) {
    if (pending.size === 0) return;
    const err = new Error(`CDP connection terminated: ${reason}`);
    for (const [id, entry] of pending.entries()) {
      pending.delete(id);
      if (entry.timer) clearTimeout(entry.timer);
      entry.reject(err);
    }
    console.error(`[E2E] Rejected pending CDP command(s) due to: ${reason}`);
  }

  chromeProcess.on('exit', (code, signal) => {
    if (!isCleanTeardown) {
      const msg = `Chrome process terminated unexpectedly (code: ${code}, signal: ${signal})`;
      console.error(`[E2E ERROR] ${msg}`);
      rejectAllPending(msg);
    }
  });

  chromeProcess.on('error', (err) => {
    if (!isCleanTeardown) {
      const msg = `Chrome process error: ${err.message}`;
      console.error(`[E2E ERROR] ${msg}`);
      rejectAllPending(msg);
    }
  });

  // 3. Read ephemeral port from DevToolsActivePort
  const activePortFile = path.join(userDataDir, 'DevToolsActivePort');
  let cdpPort = null;
  for (let i = 0; i < 50; i++) {
    if (fs.existsSync(activePortFile)) {
      try {
        const lines = fs.readFileSync(activePortFile, 'utf8').trim().split('\n');
        if (lines.length >= 1 && parseInt(lines[0], 10) > 0) {
          cdpPort = parseInt(lines[0].trim(), 10);
          break;
        }
      } catch {}
    }
    await sleep(100);
  }

  if (!cdpPort) {
    throw new Error('Failed to read DevToolsActivePort from Chrome user-data-dir.');
  }
  console.log(`[E2E] Chrome CDP active on port ${cdpPort}`);

  // 4. Retrieve target WebSocket URL from /json/list
  let pageWsUrl = null;
  for (let i = 0; i < 30; i++) {
    try {
      const listRes = await fetch(`http://127.0.0.1:${cdpPort}/json/list`);
      if (listRes.ok) {
        const pages = await listRes.json();
        const page = pages.find((p) => p.type === 'page') || pages[0];
        if (page && page.webSocketDebuggerUrl) {
          pageWsUrl = page.webSocketDebuggerUrl;
          break;
        }
      }
    } catch {}
    await sleep(100);
  }

  if (!pageWsUrl) {
    throw new Error('Failed to find Page WebSocket URL from /json/list.');
  }

  // 5. Connect to CDP WebSocket with timeout
  console.log(`[E2E] Connecting to CDP WebSocket: ${pageWsUrl}`);
  ws = new WebSocket(pageWsUrl);

  await new Promise((resolve, reject) => {
    const connTimer = setTimeout(() => {
      reject(new Error('Timed out connecting to CDP WebSocket after 10s'));
    }, 10000);
    connTimer.unref?.();

    ws.onopen = () => {
      clearTimeout(connTimer);
      resolve();
    };
    ws.onerror = (err) => {
      clearTimeout(connTimer);
      reject(new Error(`Failed to connect to CDP WebSocket: ${err.message || 'unknown'}`));
    };
  });

  // Active WebSocket lifecycle event listeners
  ws.onclose = (event) => {
    if (!isCleanTeardown) {
      const reason = `WebSocket closed unexpectedly (code: ${event.code}, reason: ${event.reason || 'none'})`;
      console.error(`[E2E ERROR] ${reason}`);
      rejectAllPending(reason);
    }
  };

  ws.onerror = (err) => {
    if (!isCleanTeardown) {
      const reason = `WebSocket error: ${err.message || 'unknown'}`;
      console.error(`[E2E ERROR] ${reason}`);
      rejectAllPending(reason);
    }
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const entry = pending.get(data.id);
        pending.delete(data.id);
        if (entry.timer) clearTimeout(entry.timer);

        if (data.error) {
          const errMsg = data.error.message || JSON.stringify(data.error);
          entry.reject(new Error(`CDP error in ${entry.method}: ${errMsg}`));
        } else {
          entry.resolve(data.result);
        }
      } else if (data.method === 'Runtime.consoleAPICalled') {
        const type = data.params?.type;
        const text = (data.params?.args || [])
          .map((a) => a.value ?? a.description ?? '')
          .join(' ');
        if (type === 'error') {
          consoleErrors.push(`[console.error] ${text}`);
          console.error(`[CDP console.error] ${text}`);
        }
      } else if (data.method === 'Runtime.exceptionThrown') {
        const details = data.params?.exceptionDetails;
        const msg = `${details?.text || ''}: ${details?.exception?.description || ''}`;
        uncaughtExceptions.push(msg);
        console.error(`[CDP uncaughtException] ${msg}`);
      }
    } catch (parseErr) {
      console.error('[E2E] Failed to parse CDP message:', parseErr);
    }
  };

  const DEFAULT_COMMAND_TIMEOUT_MS = 15000;

  function sendCommand(method, params = {}, timeoutMs = DEFAULT_COMMAND_TIMEOUT_MS) {
    return new Promise((resolve, reject) => {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        return reject(
          new Error(
            `Cannot send CDP command "${method}": WebSocket not open (readyState=${ws ? ws.readyState : 'null'})`
          )
        );
      }

      const id = msgId++;
      let timer = null;

      if (timeoutMs > 0) {
        timer = setTimeout(() => {
          if (pending.has(id)) {
            pending.delete(id);
            reject(
              new Error(
                `CDP command "${method}" timed out after ${timeoutMs}ms (id=${id})`
              )
            );
          }
        }, timeoutMs);
        timer.unref?.();
      }

      pending.set(id, {
        method,
        params,
        timer,
        resolve,
        reject,
      });

      try {
        ws.send(JSON.stringify({ id, method, params }));
      } catch (err) {
        if (timer) clearTimeout(timer);
        pending.delete(id);
        reject(new Error(`Failed to send CDP command "${method}": ${err.message}`));
      }
    });
  }

  // 6. Enable Page and Runtime domains
  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');

  // 7. Define viewports: Desktop (1280x800) and Mobile (320x640)
  const viewports = [
    {
      name: 'Desktop (1280x800)',
      width: 1280,
      height: 800,
      mobile: false,
      deviceScaleFactor: 1,
    },
    {
      name: 'Mobile (320x640)',
      width: 320,
      height: 640,
      mobile: true,
      deviceScaleFactor: 2,
    },
  ];

  for (const vp of viewports) {
    console.log(`\n[E2E] === Testing Viewport: ${vp.name} ===`);
    await sendCommand('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.deviceScaleFactor,
      mobile: vp.mobile,
    });
    await sleep(200);

    // Navigate to local server
    console.log(`[E2E] Navigating to http://127.0.0.1:${port}/ ...`);
    await sendCommand('Page.navigate', { url: `http://127.0.0.1:${port}/` });

    // Wait for DOM readiness and initial render (expanded from 25 to 60 attempts = 12s)
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      await sleep(200);
      const readyCheck = await sendCommand('Runtime.evaluate', {
        expression: `(() => {
          const nav = document.querySelector('nav[aria-label="Menu principal da plataforma"]');
          const buttons = nav ? nav.querySelectorAll('button') : [];
          const main = document.querySelector('main');
          return {
            hasNav: Boolean(nav),
            buttonCount: buttons.length,
            mainLength: main ? (main.innerText || '').trim().length : 0,
          };
        })()`,
        returnByValue: true,
      });
      const val = readyCheck.result?.value;
      if (val && val.hasNav && val.buttonCount === 7 && val.mainLength > 500) {
        ready = true;
        break;
      }
    }

    if (!ready) {
      throw new Error(`Initial page load timed out or failed to render 7 tabs in ${vp.name}.`);
    }

    // 8. Sequentially click each of the 7 tab buttons
    for (let tabIndex = 0; tabIndex < 7; tabIndex++) {
      const clickRes = await sendCommand('Runtime.evaluate', {
        expression: `(() => {
          const buttons = Array.from(document.querySelectorAll('nav[aria-label="Menu principal da plataforma"] button'));
          if (buttons.length <= ${tabIndex}) {
            return { error: 'Button ${tabIndex} not found. Count: ' + buttons.length };
          }
          const btn = buttons[${tabIndex}];
          btn.click();
          return {
            index: ${tabIndex},
            label: btn.textContent.trim(),
            totalButtons: buttons.length,
          };
        })()`,
        returnByValue: true,
      });

      const clickVal = clickRes.result?.value;
      if (clickVal?.error) {
        throw new Error(`Failed to click tab ${tabIndex}: ${clickVal.error}`);
      }

      // Wait ~400ms for DOM render
      await sleep(400);

      // Assert <main> content renders
      const mainCheck = await sendCommand('Runtime.evaluate', {
        expression: `(() => {
          const main = document.querySelector('main');
          const text = main ? (main.innerText || main.textContent || '').trim() : '';
          return {
            hasMain: Boolean(main),
            textLength: text.length,
            childrenCount: main ? main.children.length : 0,
          };
        })()`,
        returnByValue: true,
      });

      const mainVal = mainCheck.result?.value;
      if (!mainVal?.hasMain) {
        throw new Error(`Tab ${tabIndex} (${clickVal?.label}): <main> element missing from DOM.`);
      }
      if (mainVal.textLength < 500) {
        throw new Error(
          `Tab ${tabIndex} (${clickVal?.label}): <main> text length is ${mainVal.textLength} (< 500 characters).`
        );
      }

      console.log(
        `  [OK] Tab [${tabIndex}] "${clickVal?.label}" -> <main> rendered ${mainVal.textLength} chars (${mainVal.childrenCount} children)`
      );
    }
  }

  // 9. Check errors and exceptions
  console.log('\n[E2E] === Summary ===');
  console.log(`Total console.error events: ${consoleErrors.length}`);
  console.log(`Total uncaught exceptions: ${uncaughtExceptions.length}`);

  if (consoleErrors.length > 0 || uncaughtExceptions.length > 0) {
    console.error('[E2E FAIL] Console errors or uncaught exceptions detected:');
    consoleErrors.forEach((e) => console.error('  ', e));
    uncaughtExceptions.forEach((e) => console.error('  ', e));
    exitCode = 1;
    process.exitCode = 1;
  } else {
    console.log('[E2E PASS] All 7 tabs successfully rendered on Desktop and Mobile with 0 errors!');
    exitCode = 0;
    process.exitCode = 0;
  }
} catch (err) {
  console.error('[E2E FATAL ERROR]', err);
  exitCode = 1;
  process.exitCode = 1;
} finally {
  isCleanTeardown = true;
  console.log('[E2E] Cleaning up resources...');

  // Graceful browser close if connected
  if (ws && ws.readyState === WebSocket.OPEN) {
    try {
      // Short 1.5s timeout on Browser.close
      ws.send(JSON.stringify({ id: 999999, method: 'Browser.close', params: {} }));
      await sleep(200);
    } catch {}
    try {
      ws.close();
    } catch {}
  }

  // Terminate Chrome process tree (on Windows: taskkill /F /T /PID)
  if (chromeProcess && chromeProcess.pid && !chromeProcess.killed) {
    if (process.platform === 'win32') {
      try {
        spawnSync('taskkill', ['/F', '/T', '/PID', String(chromeProcess.pid)], { stdio: 'ignore' });
      } catch {}
    }
    try {
      chromeProcess.kill('SIGKILL');
    } catch {}
  }
  await sleep(250);

  if (userDataDir) {
    await cleanupUserDataDir(userDataDir);
  }

  if (server) {
    try {
      server.closeAllConnections?.();
      server.close();
    } catch {}
  }

  process.exitCode = exitCode;
  process.exit(exitCode);
}
