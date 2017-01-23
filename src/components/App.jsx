import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>React Boilerplate</h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
