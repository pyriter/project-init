var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
      'polyfills': './polyfills.ts',
      'vendor': './vendors.ts',
      'app': './app/main.ts'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        include: helpers.root('app'),
        exclude: helpers.root('node_modules'),
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('app'),
        loader: 'raw'
      }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
  ]
}
