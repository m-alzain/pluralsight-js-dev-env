import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  plugins: [
      // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          },
        inject: true
      }),
      // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash()


      //these blugins no longer work, see the below opimization config section
      //https://github.com/webpack/webpack/issues/6409

    // // Eliminate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin(),
    // // Minify js
    // new webpack.optimize.UglifyJsPlugin()

    // https://webpack.js.org/guides/code-splitting/
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
  ],

  module: {
    rules: [
      // { test: /\.css$/, use: 'css-loader' },
      // { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      // npm install --save-dev css-loader
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ]
  },

  //https://github.com/webpack/webpack/issues/6409
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
        chunks: 'all'
        }
    }
};
