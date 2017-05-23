import React from 'react'
import Collapsible from '../client/components/collapsible'
import CharacterTalents from '../client/components/characterTalents'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'
import character from '../spec/fixtures/character.json'

const component = shallow(
  <CharacterTalents data={character} />
)

test('renders Collapsible for each character spec', ()=>{
  let length = character.talents.filter(talent => {return talent.talents.length > 0}).length
  expect(component.find(Collapsible).length).toBe(length)
})

test('Collapsible is given correct props', ()=>{
  let i = 0
  component.find(Collapsible).forEach(function (node){
    let icon = `http://media.blizzard.com/wow/icons/36/${character.talents[i].spec.icon}.jpg`

    expect(node.prop('popoverInfo')).toBe(character.talents[i].spec.description)
    expect(node.prop('title')).toBe(character.talents[i].spec.name)
    expect(node.prop('iconUrl')).toBe(icon)
    i++
  })
})

test('renderTalents renders the correct number of OverlayTriggers for the given Array with correct text and props',()=>{
  let talents = character.talents[0].talents.sort((a,b) =>{
    return a.tier-b.tier;
  })
  let i = 0
  const component1 = shallow(
    <div>
    {component.instance().renderTalents(talents)}
    </div>
  )

  expect(component1.find(OverlayTrigger).length).toBe(talents.length)
  component1.find(OverlayTrigger).forEach(node =>{
    const spellUrl = `http://media.blizzard.com/wow/icons/36/${talents[i].spell.icon}.jpg`
    const popoverComponent = shallow(node.prop('overlay'))

    expect(popoverComponent.text()).toBe(talents[i].spell.description)
    expect(node.find('img').prop('src')).toBe(spellUrl)
    expect(node.find('h3').text()).toBe(talents[i].spell.name)
    i++
  })
})

test('onToggle changes state[spec.name] to true or false',()=>{
  const previousState = component.state(character.talents[0].spec.name)
  component.instance().onToggle(character.talents[0])
  expect(component.state(character.talents[0].spec.name)).toBe(!previousState)
  component.instance().onToggle(character.talents[0])
  expect(component.state(character.talents[0].spec.name)).toBe(!!previousState)

})
