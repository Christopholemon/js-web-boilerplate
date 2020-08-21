const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// const port = process.env.PORT;

module.exports = {
  // stats: 'verbose',
  watch: false,
  mode: 'development',
  entry: {
    main: './src/entry.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        // type: 'javascript/esm',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // 'postcss-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  // resolve: {
  //   extensions: [' ', '.js', '.jsx', '.scss']
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // new BrowserSyncPlugin({
    //   // browse to http://localhost:3000/ during development,
    //   // ./dist directory is being served
    //   host: 'localhost',
    //   port: port,
    //   server: { baseDir: ['dist'] }
    // })
  ]
}