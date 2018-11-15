const webpack = require('webpack')
const path = require('path')
const paths = require('./paths')

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        // options: [

        // ]
      },
      
    ]
  }
}