import Armory, {leftColumn, rightColumn, bottomRow} from '../client/components/armory'
import Equip from '../client/components/equip'
import CharacterStats from '../client/components/characterStats'
import CharacterTalents from '../client/components/characterTalents'
import React from 'react'
import {shallow} from 'enzyme'
import character from '../spec/fixtures/character.json'
import character2 from '../spec/fixtures/character_2_weapons.json'

const component = shallow(
  <Armory character={character} data={character}/>
)
const component2 = shallow(
  <Armory character={character2} data={character2}/>
)
const noDataPropComponent = shallow(
  <Armory character={character}/>
)

test('.armory is rendered', ()=>{
  expect(component.find('.armory').exists()).toBe(true)
})

test('spinner img loads when data is not yet loaded', ()=>{
  expect(noDataPropComponent.find('.spinner').exists()).toBe(true)
})

test('all <Equip> items are loaded for 2h', ()=>{
  expect(component.find(Equip).length).toBe(15)
  expect(component.find('.left-gear').find(Equip).length).toBe(leftColumn.length)
  expect(component.find('.right-gear').find(Equip).length).toBe(rightColumn.length)
  expect(component.find('.bottom-gear').find(Equip).length).toBe(1)
})

test('all <Equip> items are loaded for 2x1h', ()=>{
  expect(component2.find(Equip).length).toBe(16)
  expect(component2.find('.left-gear').find(Equip).length).toBe(leftColumn.length)
  expect(component2.find('.right-gear').find(Equip).length).toBe(rightColumn.length)
  expect(component2.find('.bottom-gear').find(Equip).length).toBe(2)
})

test('renders a <CharacterStats> with data prop', ()=>{
  expect(component.find(CharacterStats).prop('data')).toBe(character)
})

test('renders a <CharacterTalents> with data prop', ()=>{
  expect(component.find(CharacterTalents).prop('data')).toBe(character)
})
