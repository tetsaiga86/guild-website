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
              <h1 className="about-section">About Us</h1>
              <h3>
                F O O L S A V A G E Is a mythic oriented guild that believes in having fun in their raids, but getting *** done. It is this belief that made us into a 2-day raiding guild, while still competing with the top guilds on one of Hordes best servers.
              </h3>
              <h3>
                After taking a break after Cataclysm, many officers and RL friends regrouped to create what is now F O O L S A V A G E, in WoD we were able to complete 13/13 Mythic and we plan on pursuing higher rank in Legion as we continue to clear content!
              </h3>

              <h3>
                Raid nights are Tuesday/Wednesday 6:00-10:00 Pacific ST (also server time). Please do not apply or reach out if this schedule does not work EVERY week (the occasional exception is understood). If you don't have a sense of humor & can come to raids prepared AND ON TIME, informed on the fights, repaired/food/flasks ready to go than this is not the guild for you.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <h1 className="about-section">Raid Schedule</h1>
              <h3>
                Our current Mythic/Heroic raid schedule is Tuesday/Wednesday 6-10pm PST.
              </h3>
            </Col>
            <Col xs={18} md={12}>
              <h1 className="about-section">Mythic+</h1>
              <h3>
                We have multiple groups running M+ dungeons all throughout the week.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <h1 className="about-section">Do you want to be a Savage?</h1>
              <h3>
                If you are interested in joining our guild, we encourage you to head over to our Recruitment page and fill out an application. Our officers we'll get back to you asap.
              </h3>
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
