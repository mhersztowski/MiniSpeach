
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: "./src/pages_ts/page1.ts",
      output: {
        //inlineDynamicImports: false,
        //sourcemap: true,
        format: "iife",
        dir: resolve(__dirname, "../dist/pages/page1/"),
        entryFileNames: "page1.js",
      },
    },
  },
});

