import Achievement from '../client/components/achievement.jsx'
import React from 'react'
import {shallow} from 'enzyme'
import {
  Table,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import achievements from '../spec/fixtures/achievements.json'

test('renders an OverlayTrigger', ()=>{
  const achievement1=achievements.achievements[0]
  const component = shallow(
    <Achievement achievement={achievement1} />
  )
  expect(component.find(OverlayTrigger).length).toBe(1)
})
