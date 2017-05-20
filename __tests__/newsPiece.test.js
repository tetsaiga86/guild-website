import NewsPiece from '../client/components/newsPiece'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import sinon from 'sinon'

global.ENV={membership_level:1}
const component = shallow(
  <Header/>
)

test('Navbar is rendered', ()=>{
  expect(component.find(Navbar).exists()).toBe(true)
})
