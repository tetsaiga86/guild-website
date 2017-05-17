import Boss from '../client/components/boss'
import React from 'react'
import {shallow} from 'enzyme'
import unixTime from '../client/util/unix_time'
import bossImages from '../client/data/boss_images'

const boss = {
  "id": 103160,
  "name": "Nythendra",
  "lfrKills": 20,
  "lfrTimestamp": 1492316977000,
  "normalKills": 16,
  "normalTimestamp": 1493459715000,
  "heroicKills": 56,
  "heroicTimestamp": 1493462635000,
  "mythicKills": 47,
  "mythicTimestamp": 1492133676000
}
const component = shallow(
  <Boss boss={boss} />
)

test('if 3 <td> are loaded', ()=>{
  expect(component.find('td').length).toBe(3)
})

test('if 2 .skullImg are loaded', ()=>{
  expect(component.find('.skullImg').length).toBe(2)
})

test('if correct timestamp is rendered', ()=>{
  expect(component.childAt(1).shallow().text()).toBe(unixTime(boss.heroicTimestamp))
})

test('if correct img is rendered', ()=>{
  let html = `<td><img class="bossImg" src="${bossImages[boss.id]}"/>${boss.name}</td>`
  expect(component.childAt(0).html()).toBe(html)
})
