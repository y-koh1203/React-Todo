const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    js: './todo.jsx',
  },
  output: {
    path: __dirname + "/dest/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      },
    ]}
}