import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './demo',
  publicDir: '../public',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'PdfSignatureSDK',
      fileName: 'pdf-signature-sdk',
    },
    rollupOptions: {
      // We intentionally bundle pdfjs-dist for easier DX
      external: [],
      output: {
        // CSS extracted to dist/style.css
        assetFileNames: '[name][extname]',
      },
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist'],
  },
});
