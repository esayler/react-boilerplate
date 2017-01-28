import React from 'react'
import { shallow, render, mount } from 'enzyme'
import App from '../src/components/App'
import Home from '../src/components/Home'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('App', () => {
  describe('when visiting the home page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(
        <App children={<Home />} />
      )
    })

    it('should show text "React Boilerplate"', () => {
      expect(wrapper.find('h1')).to.contain.text('React Boilerplate')
    })

    it('should show text "Hello, World!"', () => {
      expect(wrapper.find('p')).to.contain.text('Hello, World!')
    })
  })
})
