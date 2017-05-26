import React from 'react'
import Members from '../client/components/members'
import Header from '../client/components/header'
import Player from '../client/components/player'
import $ from 'jquery'
import {
  Table
} from 'react-bootstrap'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import guild_members from '../spec/fixtures/guild_members.json'
import latest_logs from '../spec/fixtures/latest_logs.json'
import character_parse from '../spec/fixtures/character_parse.json'

let getJson, component
beforeEach(()=>{
  getJson = sinon.stub($, 'getJSON')
  getJson.onCall(0).callsFake((url, callBack)=>{
    callBack(guild_members)
  })
  getJson.onCall(1).callsFake((url, callBack)=>{
    callBack(latest_logs)
  })
  getJson.onCall(2).callsFake((url, callBack)=>{
    callBack(character_parse)
  })
  component = shallow(
    <Members />
  )
})
afterEach(()=>{
  getJson.restore()
})

test('Render all <Player> in tbody', ()=>{
  expect(component.find(Player).exists()).toBe(true)
  expect(component.find(Player).length).toBe(guild_members.length)
})

test('getJson is called (2+the number of guild_members) times', ()=>{
  expect(getJson.callCount).toBe(guild_members.length+2)
})

test('calculateGuildPoints() returns a number', ()=>{
  expect(typeof component.instance().calculateGuildPoints(character_parse, latest_logs, guild_members[0].name)).toBe('number')
})
