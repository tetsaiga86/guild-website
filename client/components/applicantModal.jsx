import React from 'react'
import {
  Modal,
  Table,
  Button,

} from 'react-bootstrap'

class ApplicantModal extends React.Component{
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.onRequestClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.applicant.name_server}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table className="applicant-modal-table">
            <tbody>
              <tr>
                <th>Battletag</th>
                <td>{this.props.applicant.battletag}</td>
              </tr>
              <tr>
                <th>Class/Spec</th>
                <td>{this.props.applicant.class_spec}</td>
              </tr>
              <tr>
                <th>Armory Url</th>
                <td><a href={this.props.applicant.armoryUrl} target="_blank">{this.props.applicant.armoryUrl}</a></td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{this.props.applicant.email}</td>
              </tr>
              <tr>
                <th>Can Make Raid Times</th>
                <td>{this.props.applicant.q1 ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th>Agrees to let officer know of absence</th>
                <td>{this.props.applicant.q2 ? 'No' : 'Yes'}</td>
              </tr>
              <tr>
                <th>Agrees to use mandated addons</th>
                <td>{this.props.applicant.q3 ? 'No' : 'Yes'}</td>
              </tr>
              <tr>
                <th>Viable Alts/Offspecs</th>
                <td>{this.props.applicant.q4}</td>
              </tr>
              <tr>
                <th>About</th>
                <td>{this.props.applicant.q5}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onRequestClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ApplicantModal
