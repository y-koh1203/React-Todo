const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    todo : [
      './Todo.jsx',
      './Input.jsx',
      './TaskList.jsx'
    ]
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