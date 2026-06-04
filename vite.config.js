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
      entry: {
        'pdf-signature-sdk': resolve(__dirname, "index.js"),
        'vue': resolve(__dirname, "src/adapters/vue.js"),
        'react': resolve(__dirname, "src/adapters/react.js"),
      },
      name: "PdfSignatureSDK",
      fileName: (format, entryName) => {
        if (format === 'es') return `${entryName}.js`;
        return `${entryName}.umd.cjs`;
      },
    },
    rollupOptions: {
      // We intentionally bundle pdfjs-dist for easier DX, but externalize peer dependencies
      external: ['vue', 'react'],
      output: {
        // CSS extracted to dist/style.css
        assetFileNames: "[name][extname]",
        globals: {
          vue: 'Vue',
          react: 'React',
        },
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
