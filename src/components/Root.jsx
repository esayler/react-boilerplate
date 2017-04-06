import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createHistory()

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk, routerMiddleware(history), logger)
  ))

import About from './About'
import NotFound from './NotFound'

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Link to='/' className='hello-link'><h1>React Boilerplate v1.2.0</h1></Link>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/missing'>404</Link>
        </nav>

        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root
