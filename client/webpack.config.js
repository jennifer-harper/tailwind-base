const { join } = require('node:path')

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'index.tsx'),
  output: {
    path: join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: join(__dirname, '../server/public'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, '../server/public'),
  },

}
