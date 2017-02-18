import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Miss from 'react-router/Miss'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

const Root = () => (
  <Router>
    <div>
      <Link to='/' className='hello-link'><h1>React Boilerplate v1.2.0</h1></Link>

      <nav>
        <Link to='/' activeOnlyWhenExact activeClassName='active'>Home</Link>
        <Link to='/about' activeClassName='active'>About</Link>
        <Link to='/missing' activeClassName='active'>404</Link>
      </nav>

      <div>
        <Match exactly pattern='/' component={Home} />
        <Match exactly pattern='/about' component={About} />
        <Miss component={NotFound} />
      </div>
    </div>
  </Router>
)

export default Root
