import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default [
  {
    external: [
      "react",
      "@jsonforms/core",
      "@jsonforms/react",
      "@jsonforms/material-renderers",
    ],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "iife",
        name: "Fusebit",
        sourcemap: true,
        globals: {
          react: "React",
          "@jsonforms/core": "jsonformsCore",
          "@jsonforms/react": "jsonformsReact",
          "@jsonforms/material-renderers": "jsonformsMaterialRenderers",
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ browser: "true" }),
      json(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
