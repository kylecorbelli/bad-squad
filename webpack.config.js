const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.scss',
      '.ts',
      '.tsx',
    ],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[hash].css',
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/assets/bad.png',
      template: 'src/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
}
