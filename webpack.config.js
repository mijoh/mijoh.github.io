const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = [
  'style-loader',
  'css-loader?importLoaders=1',
  'postcss-loader'
];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader?importLoaders=1', 'postcss-loader']
});
let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'dist.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }]
      },
      {
        test: /\.css$/,
        use: cssConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:6].[ext]',
              outputPath: 'assets/images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mikaela Johansson - Graphic Designer',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'dist.css',
      disable: !isProd,
      allChunks: true
    })
  ]
}
