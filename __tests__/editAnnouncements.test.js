import EditAnnouncements from '../client/components/editAnnouncements'
import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import { DragDropContext } from 'react-dnd'
import update from 'react/lib/update'
import HTML5Backend from 'react-dnd-html5-backend'
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
  stubPost.resetHistory()
})

test('edit button calls $.post twice', () => {
  var addNewBtn = component.childAt(3)
  addNewBtn.simulate('click')
  expect(stubPost.callCount).toBe(2)
  stubPost.resetHistory()
})

test.skip('delete button on AnnouncementCard calls $.ajax', () => {
  var deleteBtn = component.find(AnnouncementCard).shallow().find('Button')
  deleteBtn.simulate('click')
  expect(stubAjax.callCount).toBe(1)
  stubAjax.resetHistory()
})
