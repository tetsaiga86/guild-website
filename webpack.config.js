const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    spa: './client',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [require('babel-plugin-transform-object-rest-spread')]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
