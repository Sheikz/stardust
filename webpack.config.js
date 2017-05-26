const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./public/[name].css');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.ts',
    vendors: './src/app/bundles/vendors.ts',
    base: './src/app/style/base.scss',
  },
  output: {
    filename: './public/[name].min.js'
  },
  resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".js", ".css", ".scss"]
  },
  plugins : [
    new ngAnnotatePlugin({add: true}),
    extractCSS,
    new UglifyJSPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
          test   : /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          loader : 'url-loader'
      },
    ]
  }
}