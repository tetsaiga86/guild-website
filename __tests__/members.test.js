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

// const stubGuildMembers = sinon.stub($, 'getJSON').callsFake((url, callBack)=>{
//   callBack(guild_members)
// })
// const stubLatestLogs = sinon.stub($, 'getJSON').callsFake((url, callBack)=>{
//   callBack(latest_logs)
// })
// const stubCharacterParse = sinon.stub($, 'getJSON').callsFake((url, callBack)=>{
//   callBack(character_parse)
// })
const component = shallow(
  <Members />
)

test('Render <Player> in tbody', ()=>{
  expect(component.find(Player).exists()).toBe(true)
})
