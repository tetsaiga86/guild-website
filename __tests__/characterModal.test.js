import CharacterModal from '../client/components/characterModal.jsx'
import Armory from '../client/components/armory.jsx'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import {
  Modal,
  Button,
} from 'react-bootstrap'
import character from '../spec/fixtures/character.json'

let onRequestClose, component

beforeEach(()=>{
  onRequestClose=sinon.stub()
  component = shallow(
    <CharacterModal character={character} show={true} onRequestClose={onRequestClose}/>
  )
})

test('render modal with correct name', ()=>{
  expect(component.find(Modal.Title).children().text()).toBe(character.name)
})

test('Armory is given correct props', ()=>{
  expect(component.find(Armory).prop('data')).toBe(character)
})

test('Button invokes onRequestClose prop on click', ()=>{
  component.find(Button).simulate('click')
  expect(onRequestClose.callCount).toBe(1);
})
