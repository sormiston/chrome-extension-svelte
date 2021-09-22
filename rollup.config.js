import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
// import css from "rollup-plugin-css-only";
import { emptyDir } from "rollup-plugin-empty-dir";

import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/manifest.json",
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // css(), // { output: 'bundle.css' }
    // // If you have external dependencies installed from
    // // npm, you'll most likely need these plugins. In
    // // some cases you'll need additional configuration -
    // // consult the documentation for details:
    // // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      dedupe: ["svelte"],
    }),
    emptyDir(),
    commonjs(),
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
};
