import React from 'react'
import Applicant from './applicant'
import {
  Table,
  Button,

} from 'react-bootstrap'
import $ from 'jquery'

const recruitAppListUrl = '/admin/recruit_app_list'
class RecruitAppList extends React.Component {
  constructor(props){
    super(props);
    this.deleteApplicant = this.deleteApplicant.bind(this);
    this.state = {
      applicants: []
    };
  }

  componentWillMount(){
    $.get(recruitAppListUrl, (data) => {
      this.setState({ applicants : data })
    })
  }

  deleteApplicant(id){
    var deletUrl = `/admin/recruit_applications/${id}`
    $.ajax({
      url: deletUrl,
      method: "DELETE",
      success: (data) => {
        this.setState({ applicants : data })
      }
    })
  }

  renderApplicant(applicant){
    return <Applicant applicant={applicant} key={applicant.id} onDelete={this.deleteApplicant} />
  }

  renderApplicants(){
    return this.state.applicants.map(this.renderApplicant, this)
  }

  renderNoApplicants(){
    if(!this.state.applicants.length) return (<h4>No New Applicants</h4>)
  }

  render(){
    return(
      <div>
        <h1>Guild Applicants</h1>
        <Table striped bordered condensed hover className="">
          <thead>
            <tr>
              <th>Name/Server</th>
              <th>battletag</th>
              <th>Class/Spec</th>
              <th>Armory Url</th>
              <th>email</th>
              <th>Can make raid times</th>
              <th>Agrees to let officer know of absence</th>
              <th>Agrees to use mandated addons</th>
              <th>Viiable Alts/Offspecs</th>
              <th>About</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {this.renderApplicants()}
          </tbody>
        </Table>
        {this.renderNoApplicants()}
      </div>
    )
  }
}

export default RecruitAppList
