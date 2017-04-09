var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('./public/[name].css');

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
    extractCSS
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
      }
    ]
  }
}