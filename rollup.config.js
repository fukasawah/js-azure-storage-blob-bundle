// rollup.config.js
import nodeResolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/azure-storage-blob.ts",
    output: {
      file: "dist/azure-storage-blob.js",
      format: "umd",
      name: 'globalThis',
      extend: true,
      sourcemap: true,
    },

    plugins: [
      // minifyのような最適化を行う。ここをコメントアウトすると出力ファイルの可読性は良くなるがサイズは膨れる（361KB => 1194KB）
      terser({ maxWorkers: 4 }),
      nodeResolve({
        preferBuiltins: false,
        mainFields: ["module", "browser"]
      }),
      typescript(),
      cjs(),
    ]
  },
  {
    input: "src/azure-storage-blob.polyfill.ts",
    output: {
      file: "dist/azure-storage-blob.polyfill.js",
      format: "umd",
      name: 'globalThis',
      extend: true,
      sourcemap: true,
    },
    plugins: [
      terser({ maxWorkers: 4 }),
      nodeResolve(),
      typescript(),
      cjs(),
    ]
  }
];
