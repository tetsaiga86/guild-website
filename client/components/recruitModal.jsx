import React from 'react'
import {
  Modal,
  Button,

} from 'react-bootstrap'
import WowClass from './wowClass.jsx'

class RecruitModal extends React.Component{
  onEdit(classIndex) {
    return (specIndex, field, newValue) => {
      this.props.onEdit(classIndex, specIndex, field, newValue);
    }
  }

  renderRecruitList(){
    var wowClassList = []

    if (this.props.recruitList.length) {
      this.props.recruitList.forEach(wowClass => {
        wowClassList.push(
          <WowClass key={wowClass.id} wowClassObj={wowClass} onEdit={this.onEdit(wowClassList.length)}/>
        )
      })
    }
    return wowClassList
  }

  render(){
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
          <Button bsStyle="success" onClick={this.props.save}>Save</Button>
          <Button bsStyle="danger" onClick={this.props.onRequestClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RecruitModal
