import React from 'react'
import { Provider } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import About from '../About'
import NotFound from '../NotFound'
import Home from '../Home'

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history} >
          <div>
            <Link to='/' className='hello-link'><h1>React Boilerplate v1.3.0</h1></Link>

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
  }
}


