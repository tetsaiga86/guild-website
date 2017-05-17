import GuildNews from '../client/components/guildNews'
import NewsPiece from '../client/components/newsPiece'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'
import $ from 'jquery'
import sinon from 'sinon'

const component = shallow(
  <GuildNews news={achievements.news}/>
)

test('renders News table', ()=>{
  expect(component.find('.news-table').exists()).toBe(true)
})

test('renders correct number of <NewsPiece>', ()=>{
  expect(component.find(NewsPiece).length).toBe(achievements.news.length)
})
