const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
  // watch: false,
  watchOptions: {
    ignored: ['node_modules/**']
  },
  devtool: 'inline-source-map',
  // mode: 'development',
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
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // TODO: Want CSS output to a dedicated ./static folder
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: path.resolve(__dirname, './static'),
          //   },
          // },
          MiniCssExtractPlugin.loader,
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
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     data: (loaderContext) => {
          //       const searchParams = new URLSearchParams(loaderContext.resourceQuery);

          //       if (searchParams.has('key')) {
          //         return `$key: '${searchParams.get('key')}';`;
          //       }
          //     },
          //     // outputStyle: 'expanded',
          //   },
          // },
        ],
      }
    ]
  },
  // resolve: {
  //   extensions: [' ', '.js', '.jsx', '.scss']
  // },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static/', to: 'static/' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}
