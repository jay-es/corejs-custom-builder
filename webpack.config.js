const path = require('path')

module.exports = {
  mode: 'production',
  entry: './dist/entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'polyfill.min.js'
  }
}
