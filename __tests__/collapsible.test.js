import React from 'react'
import {
  Button,
  Collapse,
  Well,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import {shallow} from 'enzyme'
import Collapsible from '../client/components/collapsible'
import sinon from 'sinon'

const stub = sinon.stub()
const component = shallow(
  <Collapsible title={'foo'} in={true} onToggle={stub} />
)
const componentWithPopover = shallow(
  <Collapsible title={'foo'} popoverInfo={'bar'} in={true} onToggle={stub} />
)
const componentWithIcon = shallow(
  <Collapsible title={'foo'} iconUrl={'http://www.foobar.com'} in={true} onToggle={stub} />
)

test('<Button> onClick invokes onToggle prop', ()=>{
  component.find(Button).simulate('click')
  expect(stub.called).toBe(true);
})

test('correct url is given for icon', ()=>{
  expect(componentWithIcon.find('.collapsible-icon').prop('src')).toBe('http://www.foobar.com')
})

test('when no iconUrl given does not render an icon', ()=>{
  expect(component.find('.collapsible-icon').length).toBe(0)
})

test('correct title is rendered', ()=>{
  expect(component.find(Button).childAt(0).text()).toBe('foo')
})

test('popover renders correct text', ()=>{
  const renderedOverlay = shallow(componentWithPopover.find(OverlayTrigger).prop('overlay'))
  expect(renderedOverlay.text()).toBe('bar')
})

test('when no popoverInfo given does not render an OverlayTrigger', ()=>{
  expect(component.find(OverlayTrigger).length).toBe(0)
})
