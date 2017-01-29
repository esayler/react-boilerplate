import React from 'react'
import Redirect from 'react-router/Redirect'

export default class NotFound extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 5,
    }
  }

  componentDidMount() {
    setInterval(() => (
      this.setState({ counter: this.state.counter - 1, })
    ), 1000)
  }

  render() {
    return (
      (this.state.counter < 1)
        ? <Redirect to='/' />
        : <div className='not-found'> Oops! That page is not found! Bringing you Home in {this.state.counter}...</div>
    )
  }
}
