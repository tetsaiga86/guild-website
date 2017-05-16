import Achievements from '../client/components/achievements.jsx'
import React from 'react'
import {shallow} from 'enzyme'
import {
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'
import $ from 'jquery'
import sinon from 'sinon'

const stub = sinon.stub($,'getJSON', (url, callBack)=>{
  callBack(achievements)
})
const component = shallow(
  <Achievements />
)

test('renders Achievements table', ()=>{
  expect(component.find('.achievement-news-table').exists()).toBe(true)
})

//stub api call and return fake api return data
