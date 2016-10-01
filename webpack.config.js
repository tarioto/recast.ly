module.exports = {
  entry: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server', './src/index.js'],
  output: {
    path: __dirname,
    filename: './compiled/bundle.js'
  },
  module: {
    loaders: [ 
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};