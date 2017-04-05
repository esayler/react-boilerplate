import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import About from './About'
import NotFound from './NotFound'

const Root = () => (
  <Router>
    <div>
      <Link to='/' className='hello-link'><h1>React Boilerplate v1.2.0</h1></Link>

      <nav>
        <Link to='/' activeClassName='active'>Home</Link>
        <Link to='/about' activeClassName='active'>About</Link>
        <Link to='/missing' activeClassName='active'>404</Link>
      </nav>

      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default Root
