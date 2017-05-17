import Announcements from '../client/components/announcements'
import React from 'react'
import {shallow} from 'enzyme'

const component = shallow(
  <Announcements />
)

test('if state.items is empty, Annoncemnts renders No Announcements', ()=>{
  component.setState({items:[]})

  expect(component.find('li').length).toBe(0)

  expect(component.find('h2').text()).toBe('No Announcements')
})

test('renders all items in state.items', ()=>{
  component.setState({items:[1,2,3]})

  expect(component.find('li').length).toBe(component.state('items').length)
})
