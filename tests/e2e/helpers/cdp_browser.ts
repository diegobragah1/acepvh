/**
 * tests/e2e/helpers/cdp_browser.ts
 * Chrome DevTools Protocol (CDP) client over native WebSocket.
 * Encapsulates headless browser lifecycle, viewport emulation, evaluation, and clean teardown.
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, spawnSync, type ChildProcess } from 'node:child_process';

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cleanupUserDataDir(dir: string | null): Promise<void> {
  if (!dir || !fs.existsSync(dir)) return;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      return;
    } catch {
      if (attempt < 5) await sleep(250);
    }
  }
}

export interface CdpBrowserOptions {
  chromePath?: string;
  defaultTimeoutMs?: number;
}

export interface ViewportConfig {
  width: number;
  height: number;
  mobile?: boolean;
  deviceScaleFactor?: number;
}

export class CdpBrowser {
  private chromeProcess: ChildProcess | null = null;
  private userDataDir: string | null = null;
  private ws: any = null;
  private msgId = 1;
  private pending = new Map<
    number,
    {
      method: string;
      timer: NodeJS.Timeout | null;
      resolve: (val: any) => void;
      reject: (err: Error) => void;
    }
  >();
  private consoleErrors: string[] = [];
  private uncaughtExceptions: string[] = [];
  private isCleanTeardown = false;
  private defaultTimeoutMs: number;

  constructor(options: CdpBrowserOptions = {}) {
    this.defaultTimeoutMs = options.defaultTimeoutMs ?? 15000;
  }

  public static async launch(options: CdpBrowserOptions = {}): Promise<CdpBrowser> {
    const browser = new CdpBrowser(options);
    await browser.init(options.chromePath);
    return browser;
  }

  private async init(customChromePath?: string): Promise<void> {
    const chromePath =
      customChromePath ||
      process.env.CHROME_PATH ||
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

    if (!fs.existsSync(chromePath)) {
      throw new Error(`Chrome binary not found at ${chromePath}`);
    }

    this.userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-e2e-'));

    this.chromeProcess = spawn(
      chromePath,
      [
        '--headless=new',
        '--remote-debugging-port=0',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-background-networking',
        '--disable-gpu',
        `--user-data-dir=${this.userDataDir}`,
        'about:blank',
      ],
      { stdio: 'ignore' }
    );

    this.chromeProcess.on('exit', (code, signal) => {
      if (!this.isCleanTeardown) {
        const msg = `Chrome process terminated unexpectedly (code: ${code}, signal: ${signal})`;
        this.rejectAllPending(msg);
      }
    });

    this.chromeProcess.on('error', (err) => {
      if (!this.isCleanTeardown) {
        this.rejectAllPending(`Chrome process error: ${err.message}`);
      }
    });

    // Read ephemeral debugging port
    const activePortFile = path.join(this.userDataDir, 'DevToolsActivePort');
    let cdpPort: number | null = null;
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

    // Retrieve WebSocket URL from /json/list
    let pageWsUrl: string | null = null;
    for (let i = 0; i < 30; i++) {
      try {
        const listRes = await fetch(`http://127.0.0.1:${cdpPort}/json/list`);
        if (listRes.ok) {
          const pages: any = await listRes.json();
          const page = pages.find((p: any) => p.type === 'page') || pages[0];
          if (page && page.webSocketDebuggerUrl) {
            pageWsUrl = page.webSocketDebuggerUrl;
            break;
          }
        }
      } catch {}
      await sleep(100);
    }

    if (!pageWsUrl) {
      throw new Error('Failed to find Page WebSocket URL from Chrome /json/list.');
    }

    // Ensure WebSocket global exists
    if (typeof WebSocket === 'undefined') {
      throw new Error('Global WebSocket is undefined. Node must be run with --experimental-websocket.');
    }

    this.ws = new WebSocket(pageWsUrl);

    await new Promise<void>((resolve, reject) => {
      const connTimer = setTimeout(() => {
        reject(new Error('Timed out connecting to CDP WebSocket after 10s'));
      }, 10000);
      connTimer.unref?.();

      this.ws.onopen = () => {
        clearTimeout(connTimer);
        resolve();
      };
      this.ws.onerror = (err: any) => {
        clearTimeout(connTimer);
        reject(new Error(`Failed to connect to CDP WebSocket: ${err.message || 'unknown'}`));
      };
    });

    this.ws.onclose = (event: any) => {
      if (!this.isCleanTeardown) {
        this.rejectAllPending(
          `WebSocket closed unexpectedly (code: ${event.code}, reason: ${event.reason || 'none'})`
        );
      }
    };

    this.ws.onmessage = (event: any) => {
      try {
        const data = JSON.parse(event.data);
        if (data.id && this.pending.has(data.id)) {
          const entry = this.pending.get(data.id)!;
          this.pending.delete(data.id);
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
            .map((a: any) => a.value ?? a.description ?? '')
            .join(' ');
          if (type === 'error') {
            this.consoleErrors.push(`[console.error] ${text}`);
          }
        } else if (data.method === 'Runtime.exceptionThrown') {
          const details = data.params?.exceptionDetails;
          const msg = `${details?.text || ''}: ${details?.exception?.description || ''}`;
          this.uncaughtExceptions.push(msg);
        }
      } catch (parseErr) {
        console.error('[CDP Parse Error]', parseErr);
      }
    };

    // Enable Runtime and Page domains
    await this.sendCommand('Runtime.enable');
    await this.sendCommand('Page.enable');
  }

  private rejectAllPending(reason: string): void {
    if (this.pending.size === 0) return;
    const err = new Error(`CDP connection terminated: ${reason}`);
    for (const [id, entry] of this.pending.entries()) {
      this.pending.delete(id);
      if (entry.timer) clearTimeout(entry.timer);
      entry.reject(err);
    }
  }

  public sendCommand<T = any>(
    method: string,
    params: Record<string, any> = {},
    timeoutMs = this.defaultTimeoutMs
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        return reject(
          new Error(
            `Cannot send CDP command "${method}": WebSocket not open (readyState=${
              this.ws ? this.ws.readyState : 'null'
            })`
          )
        );
      }

      const id = this.msgId++;
      let timer: NodeJS.Timeout | null = null;

      if (timeoutMs > 0) {
        timer = setTimeout(() => {
          if (this.pending.has(id)) {
            this.pending.delete(id);
            reject(
              new Error(`CDP command "${method}" timed out after ${timeoutMs}ms (id=${id})`)
            );
          }
        }, timeoutMs);
        timer.unref?.();
      }

      this.pending.set(id, {
        method,
        timer,
        resolve,
        reject,
      });

      try {
        this.ws.send(JSON.stringify({ id, method, params }));
      } catch (err: any) {
        if (timer) clearTimeout(timer);
        this.pending.delete(id);
        reject(new Error(`Failed to send CDP command "${method}": ${err.message}`));
      }
    });
  }

  public async setViewport(config: ViewportConfig): Promise<void> {
    await this.sendCommand('Emulation.setDeviceMetricsOverride', {
      width: config.width,
      height: config.height,
      deviceScaleFactor: config.deviceScaleFactor ?? 1,
      mobile: Boolean(config.mobile),
    });
    await sleep(200);
  }

  public async navigate(url: string): Promise<void> {
    await this.sendCommand('Page.navigate', { url });
  }

  public async evaluate<T = any>(expression: string): Promise<T> {
    const res = await this.sendCommand('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result?.value as T;
  }

  public getErrors(): { consoleErrors: string[]; uncaughtExceptions: string[] } {
    return {
      consoleErrors: [...this.consoleErrors],
      uncaughtExceptions: [...this.uncaughtExceptions],
    };
  }

  public clearErrors(): void {
    this.consoleErrors = [];
    this.uncaughtExceptions = [];
  }

  public async close(): Promise<void> {
    this.isCleanTeardown = true;

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({ id: 999999, method: 'Browser.close', params: {} }));
        await sleep(200);
      } catch {}
      try {
        this.ws.close();
      } catch {}
    }

    if (this.chromeProcess && this.chromeProcess.pid && !this.chromeProcess.killed) {
      if (process.platform === 'win32') {
        try {
          spawnSync('taskkill', ['/F', '/T', '/PID', String(this.chromeProcess.pid)], {
            stdio: 'ignore',
          });
        } catch {}
      }
      try {
        this.chromeProcess.kill('SIGKILL');
      } catch {}
    }
    await sleep(250);

    if (this.userDataDir) {
      await cleanupUserDataDir(this.userDataDir);
      this.userDataDir = null;
    }
  }
}
