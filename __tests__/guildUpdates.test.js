import React from 'react'
import {shallow} from 'enzyme'
import GuildUpdates from '../client/components/guildUpdates'
import Achievements from '../client/components/achievements'
import GuildNews from '../client/components/guildNews'
import {
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'
import $ from 'jquery'
import sinon from 'sinon'

const stub = sinon.stub($,'getJSON').callsFake((url, callBack)=>{
  callBack(achievements)
})
const component = shallow(
  <GuildUpdates />
)

test('if state.loaded is false, renders Loading', ()=>{
  component.setState({loaded: false})
  expect(component.find('h1').text()).toBe('Loading...')
})

test('if state.loaded is true, renders achievemnt-news-table', ()=>{
  component.setState({loaded: true})
  expect(component.find('.achievement-news-table').exists()).toBe(true)
})

test('if state.loaded is true, renders an <Achievements> with props', ()=>{
  component.setState({loaded:true, achievements:achievements.achievements})

  expect(component.find(Achievements).prop('achievements')).toBe(achievements.achievements)
})

test('if state.loaded is true, renders a <GuildNews> with props', ()=>{
  component.setState({loaded:true, news:achievements.news})

  expect(component.find(GuildNews).prop('news')).toBe(achievements.news)
})
