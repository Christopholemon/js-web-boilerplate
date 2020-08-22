const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// const port = process.env.PORT;

module.exports = {
  // stats: false,
  // stats: {
  //   all: false,
  //   assets: true,
  //   env: true,
  //   entrypoints: true,
  //   errors: true
  // },
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
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'static'),
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          'sass-loader',
        ],
      },
      // { 
      //   test: /\.(s)?css$/,
      //   use: [
      //     // EXTRACT CSS
      //     'style-loader', // Creates `style` nodes from JS strings
      //     'css-loader', // Translates CSS into CommonJS          
      //     'sass-loader', // Compiles Sass to CSS
      //   ],
      // }
    ]
  },
  // resolve: {
  //   extensions: [' ', '.js', '.jsx', '.scss']
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
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