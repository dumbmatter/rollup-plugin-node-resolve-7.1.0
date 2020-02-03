const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'index.js',
  output: {
    format: 'iife',
    name: 'whatever',
    file: 'bundle.js'
  },
  plugins: [
    resolve(),
  ],
};
