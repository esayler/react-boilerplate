const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const environment = process.env.NODE_ENV || 'development'
// const configuration = require('./knexfile')[environment]
// const database = require('knex')(configuration)
// const historyFallback = require('connect-history-api-fallback')

app.use(cors())

if (environment !== 'production') {
  console.log(environment)
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
    inline: true,
    noInfo: true,
  }))
  //app.use(historyFallback())
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`We running on ${app.get('port')}.`)
})


// display app at the root and all other routes
app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
