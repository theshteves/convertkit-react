import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import styles from 'rollup-plugin-styles'

export default {
  external: ['react'],
  input: 'src/index.js',
  output: {
    file: 'bin/convertkit-form.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    styles({
      mode: ['inject', { singleTag: true }]
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({ babelHelpers: 'bundled' }),
  ]
}
