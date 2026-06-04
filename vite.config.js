import { defineConfig } from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  root: "./demo",
  publicDir: "../public",
  plugins: [cssInjectedByJsPlugin()],
  // Replace Node.js-only globals with browser-safe stubs so Webpack 4 / Nuxt 2
  // can parse the output without a "Module parse failed" error.
  define: {
    "process.getBuiltinModule": "undefined",
  },
  server: {
    port: 12000,
    open: false,
  },
  build: {
    target: "es2018",
    outDir: "../dist",
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "index.js"),
      name: "PdfSignatureSDK",
      fileName: "pdf-signature-sdk",
    },
    rollupOptions: {
      // We intentionally bundle pdfjs-dist for easier DX
      external: [],
      output: {
        // CSS extracted to dist/style.css
        assetFileNames: "[name][extname]",
      },
      plugins: [
        {
          // Runs on the final bundled output to strip any leftover
          // import.meta.url that Webpack 4 cannot parse.
          name: "strip-node-only-code",
          renderChunk(code) {
            return code.replace(/\.createRequire\(import\.meta\.url\)/g, '.createRequire("")');
          },
        },
      ],
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist"],
  },
});
