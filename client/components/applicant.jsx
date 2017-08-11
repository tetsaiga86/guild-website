import React from 'react'
import {
  Button,
} from 'react-bootstrap'
import ApplicantModal from './applicantModal'

class Applicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false }
    this.onRequestClose = this.onRequestClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  onOpen() {
    this.setState({ showModal : true });
  }

  onRequestClose () {
    this.setState({ showModal : false });
  }

  renderString(string) {
    if (string.length > 25) {
      return string.substring(0, 25) + "…"
    }
    return string;
  }

  render(){
    let applicant = this.props.applicant
    return(
      <tr onClick={this.onOpen}>
        <ApplicantModal applicant={applicant} show={this.state.showModal} onRequestClose={this.onRequestClose}/>
        <td>{this.renderString(applicant.name_server)}</td>
        <td>{this.renderString(applicant.battletag)}</td>
        <td>{this.renderString(applicant.class_spec)}</td>
        <td><a href={applicant.armoryUrl} target="_blank">{this.renderString(applicant.armoryUrl)}</a></td>
        <td>{this.renderString(applicant.email)}</td>
        <td>{this.renderString(applicant.q4)}</td>
        <td>{this.renderString(applicant.q5)}</td>
        <td>
          <Button bsStyle="danger"
            onClick={() => this.props.onDelete(applicant.id)}>
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

export default Applicant
