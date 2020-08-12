const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const port = process.env.PORT;

module.exports = {
  stats: 'verbose',
  watch: false,
  mode: 'development',
  entry: {
    main: './src/scripts/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./dist directory is being served
      host: 'localhost',
      port: port,
      server: { baseDir: ['dist'] }
    })
  ]
}