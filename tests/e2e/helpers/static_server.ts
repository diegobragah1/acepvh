/**
 * tests/e2e/helpers/static_server.ts
 * Ephemeral static HTTP server with SPA fallback for E2E testing against dist/.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

export const MIME_TYPES: Record<string, string> = {
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

export interface StaticServerHandle {
  server: http.Server;
  port: number;
  url: string;
  close: () => Promise<void>;
}

export async function startStaticServer(distDir: string): Promise<StaticServerHandle> {
  const resolvedDist = path.resolve(distDir);
  const indexPath = path.join(resolvedDist, 'index.html');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Production build not found at ${indexPath}. Run "npm run build" first.`);
  }

  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent((req.url || '/').split('?')[0]);
    if (reqPath.startsWith('/acepvh/')) {
      reqPath = reqPath.slice('/acepvh/'.length - 1);
    }
    const safePath = reqPath.replace(/^\/+/, '');
    let filePath = path.join(resolvedDist, safePath === '' ? 'index.html' : safePath);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = indexPath;
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

  await new Promise<void>((resolve, reject) => {
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => resolve());
  });

  const address = server.address();
  if (!address || typeof address === 'string') {
    throw new Error('Failed to obtain server listening address');
  }

  const port = address.port;
  const url = `http://127.0.0.1:${port}/`;

  const close = async (): Promise<void> => {
    return new Promise((resolve) => {
      try {
        server.closeAllConnections?.();
      } catch {}
      server.close(() => resolve());
    });
  };

  return {
    server,
    port,
    url,
    close,
  };
}
