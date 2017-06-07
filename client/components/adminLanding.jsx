import React from 'react'
import Footer from './footer'
import Header from './header'
import EditAnnouncements from './editAnnouncements'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  
} from 'react-bootstrap'


class AdminLanding extends React.Component {
  render () {
    return (
      <div className="home-div">
        <Header className="header" />
        <div className="main-page">
          <Grid>
           <Row className="top-row">
             <Col xs={12} md={8}>
               <Row>
                 <Col>
                   <EditAnnouncements />
                 </Col>
               </Row>
               <Row>
                 <Col xs={12} md={8}>
                 </Col>
                 <Col xs={6} md={4}>
                 </Col>
               </Row>
             </Col>
             <Col xs={6} md={4}>
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


export default AdminLanding
