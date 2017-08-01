import NewsPiece from '../client/components/newsPiece'
import Equip from '../client/components/equip'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import sinon from 'sinon'
import guildAchievNews from '../spec/fixtures/achievements.json'

const itemUrl = 'http://foobar.com'
const item = guildAchievNews.news[0]
const component = shallow(
  <NewsPiece piece={item}/>
)

test('.achievement-table-cell has onClick listener that invokes window.open with correct url', ()=>{
  var stub = sinon.stub(window, 'open')
  component.find('.achievement-table-cell').simulate('click');
  expect(stub.calledWith(`${itemUrl}${item.id}/${item.context}`))
  stub.restore()
})

test('<Equip> rendered', ()=>{
  expect(component.find(Equip).exists()).toBe(true)
})

test('Table cell has correct text', ()=>{
  expect(component.find('td').text().includes(`${item.character} has looted ${item.item.name}`)).toBe(true)
})
