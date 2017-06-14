import AdminLanding from '../client/components/adminLanding'
import Header from '../client/components/header'
import React from 'react'
import sinon from 'sinon'
import EditAnnouncements from '../client/components/editAnnouncements'
import EditRecruitList from '../client/components/editRecruitList'
import {shallow} from 'enzyme'

const component = shallow(
  <AdminLanding />
)

test.skip('renders an <EditAnnouncements/> component', () => {
  console.log(component);
  expect(component.find(EditAnnouncements).exists()).toBe(true)
})

test.skip('renders an <EditRecruitList /> component', () => {
  expect(component.find(EditRecruitList).exists()).toBe(true)
})
