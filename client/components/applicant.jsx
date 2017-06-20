import React from 'react'
import Applicant from './applicant'
import {
  Table,
  Button,

} from 'react-bootstrap'
import $ from 'jquery'

class RecruitAppList extends React.Component {

  render(){
    let applicant = this.props.applicant
    return(
      <tr>
        <td>{applicant.name_server}</td>
        <td>{applicant.battletag}</td>
        <td>{applicant.class_spec}</td>
        <td><a href={applicant.armoryUrl} target="_blank">{applicant.armoryUrl}</a></td>
        <td>{applicant.email}</td>
        <td>{applicant.q1 ? 'Yes' : 'No'}</td>
        <td>{applicant.q2 ? 'No' : 'Yes'}</td>
        <td>{applicant.q3 ? 'No' : 'Yes'}</td>
        <td>{applicant.q4}</td>
        <td>{applicant.q5}</td>
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

export default RecruitAppList
