import React from 'react'
import { Carousel } from 'react-bootstrap'

class HomeCarousel extends React.Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="carousel-img" width={615} height={300} alt="Problem loading image" src="/images/1.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" width={615} height={300} alt="Problem loading image" src="/images/2.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="carousel-img" width={615} height={300} alt="Problem loading image" src="/images/3.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}

export default HomeCarousel
