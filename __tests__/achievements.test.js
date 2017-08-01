import Achievements from '../client/components/achievements'
import Achievement from '../client/components/achievement'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'
import $ from 'jquery'
import sinon from 'sinon'

const component = shallow(
  <Achievements achievements={achievements.achievements}/>
)

test('renders Achievements table', ()=>{
  expect(component.find('.achievement-table').exists()).toBe(true)
})

test('renders correct number of <Achievement>', ()=>{
  expect(component.find(Achievement).length).toBe(achievements.achievements.length)
})
