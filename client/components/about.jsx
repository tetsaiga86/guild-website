import React from 'react'
import Footer from './footer'
import Header from './header'
import {
  Grid,
  Row,
  Clearfix,
  Col,

} from 'react-bootstrap'

class About extends React.Component{
  render(){
    return(
      <div>
        <Header className="header" />
        <Grid className="about-grid">
          <Row>
            <Col xs={18} md={12}>
              <h1>About Us</h1>
              <p>put about us here</p>
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <h1>Raid Schedule</h1>
              <p>
                Our current Mythic/Heroic raid schedule is Tuesday/Wednesday 6-10pm PST.
              </p>
            </Col>
            <Col xs={18} md={12}>
              <h1>Mythic+</h1>
              <p>
                We have multiple groups running M+ dungeons all throughout the week.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <h2>Do you want to be a Savage?</h2>
              <p>
                If you are interested in joining our guild, we encourage you to head over to our Recruitment page and fill out an application. Our officers we'll get back to you asap.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <Footer />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
