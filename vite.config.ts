import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'dual-mode-github-pages-html',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          return html
            .replace(/<!-- STATIC_BUNDLE_START -->[\s\S]*?<!-- STATIC_BUNDLE_END -->/, '')
            .replace(
              /<!-- STATIC_SCRIPT_START -->[\s\S]*?<!-- STATIC_SCRIPT_END -->/,
              '<script type="module" src="/src/main.tsx"></script>'
            );
        },
      },
    },
    react(),
  ],
  // Base relativa './' garante funcionamento tanto em https://diegobragah1.github.io/acepvh/ quanto em raiz /
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app-bundle.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/app-bundle.[ext]',
      },
    },
  },
});
