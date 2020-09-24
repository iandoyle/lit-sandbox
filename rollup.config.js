import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: 'docs/node_modules' },
    { src: 'index.html', dest: 'docs' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: 'lib/lit.js',
  output: {
    dir: 'docs/lib/',
    format: 'es',
  },
  plugins: [minifyHTML(), copy(copyConfig), resolve()],
  preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;
