import Recruitment from '../client/components/recruitment.jsx'
import React from 'react'
import {shallow} from 'enzyme'

const component = shallow(
  <Recruitment />
)
const recruitmentList = component.find('.recruitment-list')

test('renders a list of all 12 classes', ()=>{
  expect(component.find('li').length).toBe(12)
})
