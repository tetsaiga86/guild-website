import Armory from '../client/components/armory'
import Equip from '../client/components/equip'
import CharacterStats from '../client/components/characterStats'
import CharacterTalents from '../client/components/characterTalents'
import React from 'react'
import {shallow} from 'enzyme'
import character from '../spec/fixtures/character.json'

const component = shallow(
  <Armory character={character} data={character}/>
)
const noDataPropComponent = shallow(
  <Armory character={character}/>
)

test('if .armory is rendered', ()=>{
  expect(component.find('.armory').exists()).toBe(true)
})

test('spinner img loads when data is not yet loaded', ()=>{
  expect(noDataPropComponent.find('.spinner').exists()).toBe(true)
})

test('all <Equip> items are loaded', ()=>{
  // FIXME: ?
  expect(component.find(Equip).length).toBe(15)
})

test('<CharacterStats> to recieve data', ()=>{
  expect(component.find(CharacterStats).prop('data')).toBe(character)
})

test('<CharacterTalents> to recieve data', ()=>{
  expect(component.find(CharacterTalents).prop('data')).toBe(character)
})
