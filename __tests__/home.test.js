import Home from '../client/components/home'
import Header from '../client/components/header'
import HomeCarousel from '../client/components/homeCarousel'
import Announcements from '../client/components/announcements'
import Recruitment from '../client/components/recruitment'
import Progress from '../client/components/progress'
import Footer from '../client/components/footer'
import React from 'react'
import {shallow} from 'enzyme'

const component = shallow(
  <Home />
)

test('<Header/> is rendered', ()=>{
  expect(component.find(Header).exists()).toBe(true)
})

test('<HomeCarousel/> is rendered', ()=>{
  expect(component.find(HomeCarousel).exists()).toBe(true)
})

test('<Announcements/> is rendered', ()=>{
  expect(component.find(Announcements).exists()).toBe(true)
})

test('<Recruitment/> is rendered', ()=>{
  expect(component.find(Recruitment).exists()).toBe(true)
})

test('<Progress/> is rendered', ()=>{
  expect(component.find(Progress).exists()).toBe(true)
})

test('<Footer/> is rendered', ()=>{
  expect(component.find(Footer).exists()).toBe(true)
})
