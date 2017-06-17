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
const stubAddAnnouncement = sinon.stub(EditAnnouncements.prototype, 'addAnnouncement')
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

test('add new button calls addAnnouncement()', () => {
  var addNewBtn = component.childAt(3)
  addNewBtn.simulate('click')
  expect(stubAddAnnouncement.callCount).toBe(1)
  stubAddAnnouncement.resetHistory()
})

test('AnnoouncementCard is given expected props', () => {
  var card = component.find(AnnouncementCard)
  expect(card.prop('onMove')).toBe(component.instance().moveAnnouncement)
  expect(card.prop('onDelete')).toBe(component.instance().deleteAnnouncement)
  expect(card.prop('onEdit')).toBe(component.instance().editAnnouncement)
})
