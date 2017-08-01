import React from 'react'
import Announcements from './announcements'
import Footer from './footer'
import Header from './header'
import HomeCarousel from './homeCarousel'
import Progress from './progress'
import Recruitment from './recruitment'
import {
  Grid,
  Row,
  Clearfix,
  Col
} from 'react-bootstrap'


class Home extends React.Component {
  render () {
    return (
      <div className="home-div">
        <Header className="header" />
        <div className="banner-div">
          <img className="banner" src="/images/kubrickheader.jpg"/>
        </div>
        <div className="main-page">
          <Grid>
           <Row className="top-row">
             <Col xs={12} md={8}>
               <Row>
                 <Col>
                   <HomeCarousel />
                 </Col>
               </Row>
               <Row>
                 <Col xs={12} md={8}>
                   <Announcements />
                 </Col>
                 <Col xs={6} md={4}>
                   <Recruitment />
                 </Col>
               </Row>
             </Col>
             <Col xs={6} md={4}>
               <Progress />
             </Col>
           </Row>
           <Row className="footer">
             <Footer />
           </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Home
