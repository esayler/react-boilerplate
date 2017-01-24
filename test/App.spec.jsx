import React from 'react'
import { render } from 'enzyme'
import App from '../src/components/App'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('App', () => {
  it('should render text', () => {
    const wrapper = render(<App />)
    expect(wrapper.find('h1')).to.contain.text('React Boilerplate')
  })
})
