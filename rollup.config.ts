import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: "src/index.ts",
  output: {
    file: pkg.main,
    name: "dav-parser",
    format: "es",
    sourcemap: true,
    intro: 'let ICAL = {}'
  },
  external: [],
  watch: {
    include: "src/**",
  },
  plugins: [
    typescript({
      sourceMap: true,
      declaration: true,
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
    resolve(),
  ]
};
