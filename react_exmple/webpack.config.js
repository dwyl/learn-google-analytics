module.exports = {
  entry: {
    javascript: './src/app.js',
    html: './src/index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
