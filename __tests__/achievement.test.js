import Achievement from '../client/components/achievement.jsx'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import {
  Table,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'

const iconUrl = 'http://media.blizzard.com/wow/icons/56/';
const achievementUrl = 'http://www.wowhead.com/achievement=';
const achievement1=achievements.achievements[0]
const details = achievement1.details;

const component = shallow(
  <Achievement achievement={achievement1} />
)
const overlayTrigger = component.find(OverlayTrigger)
const overlay = overlayTrigger.prop('overlay')
const renderedOverlay = shallow(overlay)
const td = overlayTrigger.find('td')

test('renders an OverlayTrigger', ()=>{
  expect(component.find(OverlayTrigger).length).toBe(1)
})

test('gives the correct number of rendered criteria inside overlay prop of OverlayTrigger component', ()=>{
  expect(renderedOverlay.find('li').length).toBe(achievement1.details.criteria.length)
})

test('.achievement-table-cell has onClick listener that invokes window.open with correct url', ()=>{
  var criteria = details.criteria;
  var stub = sinon.stub(window, 'open')
  overlayTrigger.children('.achievement-table-cell').simulate('click');
  expect(stub.calledWith(`${achievementUrl}${achievement1.id}/${details.title}`))
  stub.restore()
})

test('renders img with correct src', ()=>{
  expect(td.children('.achievement-icon').prop('src')).toBe(`${iconUrl}${details.icon}.jpg`)
})
