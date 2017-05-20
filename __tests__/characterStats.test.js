import CharacterStats from '../client/components/characterStats'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import character from '../spec/fixtures/character.json'
import character2 from '../spec/fixtures/character_2_weapons.json'
import sinon from 'sinon'

const component = shallow(
  <CharacterStats data={character}/>
)
const componentNoMana = shallow(
  <CharacterStats data={character2}/>
)
const componentNoProps = shallow(
  <CharacterStats />
)

test('makePercent() turns int into %', ()=>{
  expect(component.instance().makePercent(0)).toBe('0.00%')
  expect(component.instance().makePercent(5.5567)).toBe('5.56%')
})

test('makePercent() returns Loading... when given Loading...', ()=>{
  expect(component.instance().makePercent('Loading...')).toBe('Loading...')
})

test('popover renders loading while no props', ()=>{
  let popoverText = 'loading...'
  let popoverComponent = shallow(componentNoProps.instance().statPopover('string'))
  expect(popoverComponent.text()).toBe(popoverText)
})

test('popover renders Not Available when asked for an unavailable stat', ()=>{
  let popoverText = 'Not Available'
  let popoverComponent = shallow(component.instance().statPopover('foo'))
  expect(popoverComponent.text()).toBe(popoverText)
})

test('popover renders stat if available', ()=>{
  let popoverComponent = shallow(component.instance().statPopover('health'))
  expect(parseInt(popoverComponent.text())).toBe(character.stats.health)
})

test('renderStats() returns stat num if props.data exists', ()=>{
  expect(component.instance().renderStats('health')).toBe(character.stats.health)
})

test('renderStats() returns -- if mana == 0 and props.data exists', ()=>{
  expect(componentNoMana.instance().renderStats('mana5')).toBe('--')
})

test('renderStats() returns Loading... if no data prop is given', ()=>{
  expect(componentNoProps.instance().renderStats('string')).toBe('Loading...')
})

test('buildOverlayTrigger() returns an element wrapped in an OverlayTrigger', ()=>{
  let element = <h2></h2>
  let string = 'string'
  let overlayTrigger = shallow(component.instance().buildOverlayTrigger(element, string))
  expect(overlayTrigger.find('h2').exists()).toBe(true)
})

test('buildOverlayTrigger() returns an element wrapped in an OverlayTrigger with a string passed to overlay prop', ()=>{
  const spy = sinon.spy(component.instance(), 'statPopover')
  let element = <h2></h2>
  let string = 'foo'
  let overlayTrigger = shallow(component.instance().buildOverlayTrigger(element, string))
  expect(spy.called).toBe(true)
})
