import React from 'react'
import {
  Modal,
  Button,

} from 'react-bootstrap'
import WowClass from './wowClass.jsx'

class RecruitModal extends React.Component{
  constructor(props) {
    super(props)
    this.renderRecruitList = this.renderRecruitList.bind(this)
  }

  renderRecruitList(){
    var wowClassList = []

    if (this.props.recruitList.length) {
      this.props.recruitList.forEach(wowClass => {
        wowClassList.push(
          <WowClass key={wowClass.id} wowClassObj={wowClass}/>
        )
      })
    }
    return wowClassList
  }

  render(){
    console.log(this.props.recruitList);
    return(
      <Modal show={this.props.show} onHide={this.props.onRequestClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Recruit List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderRecruitList()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.save}>Save</Button>
          <Button onClick={this.props.onRequestClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RecruitModal
