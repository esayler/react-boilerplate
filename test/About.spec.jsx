import React from 'react'
import { shallow } from 'enzyme'
import About from '../src/components/About'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect

describe('<About />', () => {
  describe('when visiting the about page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<About />)
    })

    it('should show text "About Me"', () => {
      expect(wrapper.find('p')).to.contain.text('About Me')
    })
  })
})
