import Raid from '../client/components/raid'
import Boss from '../client/components/boss'
import Collapsible from '../client/components/collapsible'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table
} from 'react-bootstrap'
import officer_info from '../spec/fixtures/officer_info.json'
import sinon from 'sinon'

const raid = {
  ...officer_info[0],
  in: true
}
const component = shallow(
  <Raid raid={raid}/>
)

test('renders <Collapsible>', ()=>{
  expect(component.find(Collapsible).exists()).toBe(true)
})

test('renders correct number of <Boss>', ()=>{
  expect(component.find(Boss).length).toBe(raid.bosses.length)
})
