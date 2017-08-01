import HomeCarousel from '../client/components/homeCarousel'
import React from 'react'
import {shallow} from 'enzyme'
import { Carousel } from 'react-bootstrap'
import sinon from 'sinon'
import $ from 'jquery'
import fs from 'fs'

const htmlString = fs.readFileSync('./spec/fixtures/news.html')
const stub = sinon.stub($, 'get').callsFake((url, callBack)=>{
  callBack(htmlString)
})
const component = shallow(
  <HomeCarousel/>
)

test('renders a Carousel', ()=>{
  expect(component.find(Carousel).exists()).toBe(true)
})

test('renders the correct number of Carousel.Item', ()=>{
  expect(component.find(Carousel.Item).length).toBe($(htmlString).find('.ArticleTile').length)
})
