module.exports = {
  entry: {
    app: './src/app/app.ts',
    vendors: './src/app/bundles/vendors.ts'
  },
  output: {
    filename: './public/[name].min.js'
  },
  resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'ts-loader'
      }
    ]
  }
}