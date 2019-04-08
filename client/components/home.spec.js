/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Home} from './home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let testHome

  beforeEach(() => {
    testHome = shallow(<Home email="cody@email.com" />)
  })

  it('renders something', () => {
    expect(testHome.find('div').text()).to.be.equal('')
  })
})
