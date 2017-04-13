const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  externals: {
    // 'cheerio': 'window',
    'react/addons': 'react',
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          {
            loader: 'sass-loader?sourceMap',
            options: {
              includePaths: resolve(__dirname, 'node_modules/normalize-scss/sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
