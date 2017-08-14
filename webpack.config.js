const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/app.js', './src/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/, //webpack scans all .js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?importLoaders=1')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    })
  ]
};
