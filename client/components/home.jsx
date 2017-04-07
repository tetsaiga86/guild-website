import React from 'react'
import Announcements from './announcements'
import Footer from './footer'
import Header from './header'
import Slide from './slide'
import Progress from './progress'
import Recruitment from './recruitment'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'


class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
          <Grid>
           <Row className="top-row">
             <Col xs={12} md={8}><code><Slide /></code></Col>
             <Col xs={6} md={4}><code><Progress /></code></Col>
           </Row>

           <Row className="bottom-row">
             <Col xs={6} md={4}><code><Announcements /></code></Col>
             <Col xs={6} md={4}><code><Recruitment /></code></Col>
           </Row>
           <Row className="footer"><Footer /></Row>
         </Grid>
      </div>
    )
  }
}


export default Home
