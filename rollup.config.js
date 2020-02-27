import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  // TODO: doesn't work, do we even need `cjs` in entry?
  // output: [
  //   {
  //     dir: 'dist',
  //     format: 'cjs',
  //     sourcemap: true
  //   },
  //   {
  //     dir: 'dist',
  //     format: 'es',
  //     sourcemap: true
  //   }
  // ],
  plugins: [
    external(),
    filesize(),
    url(),
    svgr(),
    postcss(),
    babel({ exclude: 'node_modules/**' }),
    // https://github.com/rollup/rollup-plugin-node-resolve/issues/107#issuecomment-489646583
    resolve({ preferBuiltins: true, mainFields: ['browser'] }),
    // https://github.com/styled-components/styled-components/issues/1654#issuecomment-441151140
    commonjs({
      // https://github.com/rollup/rollup-plugin-commonjs/issues/361
      // https://github.com/rollup/rollup-plugin-commonjs#usage-with-symlinks
      include: /node_modules/, // changed from 'node_modules/**'
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),
    json()
  ],
  external: ['path']
};
