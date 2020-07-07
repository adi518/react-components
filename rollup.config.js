// https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied

import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    url(),
    svgr(),
    json(),
    postcss(),
    filesize(),
    external(),
    babel({ exclude: 'node_modules/**' }),
    // https://github.com/rollup/rollup-plugin-node-resolve/issues/107#issuecomment-489646583
    resolve({ preferBuiltins: true, mainFields: ['browser'] }),
    // https://github.com/styled-components/styled-components/issues/1654#issuecomment-441151140
    commonjs({
      // https://github.com/rollup/rollup-plugin-commonjs/issues/361
      // https://github.com/rollup/rollup-plugin-commonjs#usage-with-symlinks
      include: /node_modules/ // changed from 'node_modules/**'
    })
  ],
  external: ['path']
};
