import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as HotReloader } from 'react-hot-loader'
import Root from './components/Root'

require('./styles/base.scss')

const rootElement = document.getElementById('root')
ReactDOM.render(
  <HotReloader>
    <Root />
  </HotReloader>, rootElement)

if (module.hot) {
  module.hot.accept('../src', () => {
    ReactDOM.render(
      <HotReloader>
        <Root />
      </HotReloader>, rootElement)
  })
}
