import Header from '../client/components/header'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import sinon from 'sinon'

global.ENV={membership_level:1}
const component = shallow(
  <Header/>
)

test('Navbar is rendered', ()=>{
  expect(component.find(Navbar).exists()).toBe(true)
})

test('Nav is rendered', ()=>{
  expect(component.find(Nav).exists()).toBe(true)
})

test('NavDropdown is rendered', ()=>{
  expect(component.find(NavDropdown).exists()).toBe(true)
})
