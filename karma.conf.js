var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/**/*.spec.jsx'
    ],
    exclude: [],
    preprocessors: {
      'test/**/*.jsx': ['webpack', 'sourcemap']
    },
    webpack: { // kind of a copy of your webpack config
      devtool: 'eval-source-map', // just do inline source maps instead of the default
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      externals: webpackConfig.externals,
      resolve: webpackConfig.resolve,
      performance: false
    },
    webpackServer: {
      stats: 'errors-only'
    },
    reporters: ['mocha'],
    mochaReporter: {
      colors: {
        warning: 'black',
        error: 'red'
      },
      mochaReporter: {
        showDiff: 'unified'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
