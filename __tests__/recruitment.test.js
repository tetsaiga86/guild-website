import Recruitment from '../client/components/recruitment.jsx'
import React from 'react'
import {shallow} from 'enzyme'
import recruitJson from '../spec/fixtures/recruit.json'
import sinon from 'sinon'
import $ from 'jquery'

const stub = sinon.stub($, 'getJSON').callsFake((url, callBack) => {
  callBack(recruitJson)
})
const component = shallow(
  <Recruitment />
)
const recruitmentList = component.find('.recruitment-list')

test('renders a list of all wow_specs in recruitJson', ()=>{
  expect(component.find('li').length).toBe(recruitJson.length)
})

test('renders an <h3>, with expected text if recruitJson is empty', ()=>{
  component.setState({ wowClasses : [] })
  expect(component.find('h3').exists()).toBe(true)
  expect(component.find('h3').text()).toBe('No Recruitment at this time')
})
