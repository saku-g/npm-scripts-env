/* eslint-env node */
const path = require('path');

module.exports = (env, argv) => ({
  entry: './src/assets/js/app.js',
  mode: argv.mode,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/js/[name].bundle.js',
  },
});
