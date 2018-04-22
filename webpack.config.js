var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'polyfill.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
}
