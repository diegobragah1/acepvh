import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
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
  // Base '/' no dev server (porta 3000) e './' no build para GitHub Pages (/acepvh/)
  base: command === 'build' ? './' : '/',
  optimizeDeps: {
    entries: ['src/main.tsx'],
    include: ['react', 'react-dom', 'react-dom/client', 'lucide-react'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: {
      ignored: [
        '**/dist/**',
        '**/assets/**',
        '**/data/**',
        '**/public/data/**',
        '**/content/**',
        '**/scripts/**',
        '**/sources/**',
        '**/.playwright-cli/**',
      ],
    },
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
}));
