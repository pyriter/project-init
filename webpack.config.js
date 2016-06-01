var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
//var webpack = require('webpack');

module.exports = {
  entry: {
   main: "./app/main.ts"
  },
  output: {
    path: __dirname,
    filename: "./app/dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css"
      }
      ,
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['']}
    })
  ]
};
