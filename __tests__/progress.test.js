import React from 'react'
import Raid from '../client/components/raid'
import Progress from '../client/components/progress'
import officerInfo from '../spec/fixtures/officer_info.json'
import {shallow} from 'enzyme'
import $ from 'jquery'
import sinon from 'sinon'

const stub = sinon.stub($,'getJSON').callsFake((url, callBack)=>{
  callBack(officerInfo)
})
const component = shallow(
  <Progress />
)

test('renders the correct number of raids', ()=>{
  expect(component.find(Raid).length).toBe(officerInfo.length)
})

test('renders correct <h2> text', ()=>{
  expect(component.find('h2').text()).toBe('Progression')
})

test('<Raid> recieves correct props', ()=>{
  expect(component.find('div').childAt(1).prop('raid')).toBe(officerInfo[0])
})

test('onToggle toggles given raid', ()=>{
  let raids = component.state('raids')
  const previousIn = raids[0].in;
  component.instance().onToggle(raids[0])
  expect(raids[0].in).toBe(!previousIn)
})

test('onToggle collapses all other raids', ()=>{
  let raids = component.state('raids')
  component.instance().onToggle(raids[0])
  for (var i = 1; i < raids.length; i++) {
    expect(raids[i].in).toBe(false)
  }
})
