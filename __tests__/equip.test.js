import React from 'react'
import statMap from '../client/data/stat_id.js'
import Equip from '../client/components/equip'
import $ from 'jquery'
import {
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import equip_item from '../spec/fixtures/equip_item.json'
import equip_item_with_armor from '../spec/fixtures/equip_item_with_armor.json'
import equip_artifact_item from '../spec/fixtures/equip_artifact_item.json'

const iconUrl = 'http://media.blizzard.com/wow/icons/56/';
const itemUrl = 'http://us.battle.net/wow/en/item/';
const component = shallow(
  <Equip item={equip_item} position={'right'}/>
)
const statComponent = shallow(
  <div>{component.instance().renderItemStats(equip_item.stats)}</div>
)

test('getArtifiactRank() returns the artifact rank', ()=>{
  expect(component.instance().getArtifactRank(equip_artifact_item).includes(51))
})
test('getArtifiactRank() returns undefined if item is not artifact', ()=>{
  expect(component.instance().getArtifactRank(equip_item)).toBe(undefined)
})

test('getArmor() returns armor if it exists and undefined if not', ()=>{
  expect(component.instance().getArmor(equip_item_with_armor)).toBe(`${equip_item_with_armor.armor} Armor`)
  expect(component.instance().getArmor(equip_item)).toBe(undefined)
})

test('renderItemStats returns an array of <h5> of the stat names and amounts', ()=>{
  let counter=0
  expect(statComponent.find('h5').exists()).toBe(true)
  expect(statComponent.find('h5').length).toBe(equip_item.stats.length)
  statComponent.find('h5').forEach(node =>{
    let statId=equip_item.stats[counter].stat;
    let amount=equip_item.stats[counter].amount;
    expect(node.text()).toBe(`${statMap[statId]}: ${amount}`)
    counter++
  })
})

test('renders OverlayTrigger', ()=>{
  expect(component.find(OverlayTrigger).exists()).toBe(true)
})

test('popover renders correct text', ()=>{
  const renderedOverlay = shallow(component.find(OverlayTrigger).prop('overlay'))
  expect(renderedOverlay.text().includes(equip_item.name))
  expect(renderedOverlay.text().includes(equip_item.itemLevel))
  for (var i = 0; i < equip_item.stats.length; i++) {
    expect(renderedOverlay.text().includes(equip_item.stats[i].amount))
  }
})

test('renders <a> with correct url', ()=>{
  let item = equip_item
  expect(component.find('a').prop('href')).toBe(`${itemUrl}${item.id}/${item.context}`)
})
test('renders <img> with correct src', ()=>{
  expect(component.find('img').prop('src')).toBe(`${iconUrl}${equip_item.icon}.jpg`)
})
