import Footer from '../client/components/footer'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'

const component = shallow(
  <Footer/>
)

test('.contact div is rendered', ()=>{
  expect(component.find('.contact').exists()).toBe(true)
})

test('<a></a> is rendered', ()=>{
  expect(component.find('a').exists()).toBe(true)
})
