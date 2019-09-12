import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
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
      { test: /\.css$/, use: 'css-loader' },
    ]
  }
};

// export default {
//   // debug: true, // WebpackOptionsValidationError: Invalid configuration object.
//   devtool: 'inline-source-map',
//   // noInfo: false, //WebpackOptionsValidationError: Invalid configuration object.
//   entry: [
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'src'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     // Create HTML file that includes reference to bundled JS.
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//       inject: true
//     })
//   ],

//   module: {
//     rules: [
//       {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
//       {test: /\.css$/, loaders: ['style','css']}
//     ]
//   }
// }
