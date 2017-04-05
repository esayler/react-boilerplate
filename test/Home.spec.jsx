import React from 'react'
import { shallow } from 'enzyme'
import Home from '../src/components/Home'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Home />', () => {
  describe('when visiting the home page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Home />)
    })

    it('should show text "Hello, World!"', () => {
      expect(wrapper.find('.content')).to.contain.text('Hello, World!')
    })
  })
})
