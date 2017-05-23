import React from 'react'
import classID from '../client/data/character_class_id'
import CharacterModal from '../client/components/characterModal'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import sinon from 'sinon'
import Player from '../client/components/player'
import member from '../spec/fixtures/character.json'

const player = {
  ...member,
  gp: 1000
}
const component = shallow(
  <Player player={player} key={player.name}/>
)
const playerNoItems = {
  ...member,
  items: {},
  talents: []
}
const componentNoItems = shallow(
  <Player player={playerNoItems} key={playerNoItems.name} />
)

test('Render 6 <td> with correct text', ()=>{
  expect(component.find('td').length).toBe(6)
  expect(component.find('tr').childAt(1).text()).toBe(player.name)
  expect(component.find('tr').childAt(2).text()).toBe(classID[player.class])
  expect(component.find('tr').childAt(3).text()).toBe(component.instance().getCharacterspec(player))
  expect(parseInt(component.find('tr').childAt(4).text())).toBe(player.achievementPoints)
  expect(parseInt(component.find('tr').childAt(5).text())).toBe(component.instance().getGuildPoints(player))
  expect(parseInt(component.find('tr').childAt(6).text())).toBe(player.items.averageItemLevel)
})

test('averageItemLevel renders Not Available if itemLevel is falsy', ()=>{
  expect(componentNoItems.find('tr').childAt(6).text()).toBe('Not Available')
})

test('getCharacterspec returns Not Available if player.talents is falsy', ()=>{
  expect(componentNoItems.instance().getCharacterspec(playerNoItems)).toBe('Not Available')
})

test('getCharacterspec returns the players current spec', ()=>{
  expect(component.instance().getCharacterspec(player)).toBe(player.talents[0].spec.name)
})

test('getGuildPoints returns the players current gp', ()=>{
  expect(component.instance().getGuildPoints(player)).toBe(player.gp)
})

test('onOpen sets component state showModal to true', ()=>{
  component.setState({showModal:false})
  component.instance().onOpen()
  expect(component.state('showModal')).toBe(true)
  component.setState({showModal:false})
})

test('onRequestClose sets component state showModal to false', ()=>{
  component.setState({showModal:true})
  component.instance().onRequestClose()
  expect(component.state('showModal')).toBe(false)
  component.setState({showModal:false})
})
