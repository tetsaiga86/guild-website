import EditAnnouncements from '../client/components/editAnnouncements'
import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import AnnouncementCard from '../client/components/announcementCard'
import all_announcements from '../spec/fixtures/all_announcements.json'
import $ from 'jquery'

const stubGetJson = sinon.stub($, 'getJSON').callsFake((url, callBack) => {
  callBack(all_announcements)
})
const stubPost = sinon.stub($, 'post')
const stubAjax = sinon.stub($, 'ajax')
const component = shallow(
  <EditAnnouncements />
)

test('renders an <AnnouncementCard/> component', () => {
  expect(component.find(AnnouncementCard).exists()).toBe(true)
})

test('save button calls $.post', () => {
  component.setState({ change : true })
  var saveBtn = component.childAt(2)
  saveBtn.simulate('click')
  expect(stubPost.callCount).toBe(1)
  stubPost.restore()
})

test('edit button calls $.post twice', () => {
  var addNewBtn = component.childAt(3)
  addNewBtn.simulate('click')
  expect(stubPost.callCount).toBe(1)
  stubPost.restore()
})
