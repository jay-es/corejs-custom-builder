const path = require('path')

module.exports = {
  mode: 'production',
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'polyfill.min.js'
  }
}
