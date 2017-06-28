import React from 'react'
import Header from './header'
import Player from './player'
import $ from 'jquery'
import {
  Table
} from 'react-bootstrap'

const guildMembersUrl = `/api/guild_members`;
const logReportUrl = `/api/latest_logs`;

class Members extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      members: []
    };
    this.members = props.members;
  }

  componentWillMount(){
    this.fetchGuildMembers();
  }

  fetchGuildMembers(){
    $.getJSON(guildMembersUrl, (members) => {
      this.setState({ members })
    })
  }

  renderMember(member){
    return <Player player={member} key={member.body.name}/>
  }

  renderMembers(){
    return this.state.members.map(this.renderMember);
  }

  render () {
    return (
      <div>
        <Header />
        <Table striped bordered condensed hover className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Spec</th>
              <th>Achievement Points</th>
              <th>Dkp</th>
              <th>Item Level</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMembers()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Members
