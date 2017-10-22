const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReloadPlugin = require('reload-html-webpack-plugin');

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
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
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
          'file-loader?name=[hash:6].[ext]&outputPath=assets/images/',
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
    hot: true,
    inline: true,
    host: '192.168.1.179',
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 1988,
    stats: "errors-only",
    open: true,
    openPage: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './app/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ReloadPlugin({
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    })
  ]
}
