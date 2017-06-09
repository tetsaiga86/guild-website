import React from 'react'
import Footer from './footer'
import Header from './header'
import EditAnnouncements from './editAnnouncements'
import EditRecruitList from './editRecruitList'
import {
  Grid,
  Row,
  Clearfix,
  Col,

} from 'react-bootstrap'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'


class AdminLanding extends React.Component {
  render () {
    return (
      <div className="home-div">
        <Header className="header" />
        <div className="main-page">
          <Grid>
           <Row className="top-row">
             <Col xs={18} md={12}>
               <Row>
                 <Col xs={12} md={8}>
                   <EditAnnouncements />
                 </Col>
                 <Col xs={6} md={4}>
                   <EditRecruitList />
                 </Col>
               </Row>
               <Row>
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


export default DragDropContext(HTML5Backend)(AdminLanding)
