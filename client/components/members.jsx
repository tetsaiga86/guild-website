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

  calculateGuildPoints(playerReport, logJsonArray, name){
    var totalPoints=0;
    var counter=0;
    playerReport.forEach(report => {
      report.specs.forEach(specReport => {
        totalPoints+=specReport.best_historical_percent;
        counter++;
      })
    })
    var performance = Math.floor((totalPoints/counter)*10) || 1;
    var attendance = 0;
    logJsonArray.forEach(log => {
      const attendingFriendly = log.friendlies.find(friendly => friendly.name == name);
      if (attendingFriendly) {
        const attendingDate = new Date(log.start);
        const attendingDayOfWeek = attendingDate.getDay();
        // if(name=="Lëmmiwinks") console.log(name, attendingDate);
        switch(attendingDayOfWeek) {
          case 2:
          case 3:
            attendance+=225;
            break;
          case 4:
          attendance+=50;
          break;
        }
      }
    })
    return Math.floor((performance+attendance)/2);
  }

  fetchGuildMembers(){
    $.getJSON(guildMembersUrl, (guildMembersJson) => {
      const gMembers = guildMembersJson;
      $.getJSON(logReportUrl, (logReport) => {
        gMembers.forEach(gMember => {
          $.getJSON(`/api/character_parse/${gMember.name}`, (playerReport) => {
            playerReport = playerReport.filter(report => report.difficulty>=4);
            gMember.gp=this.calculateGuildPoints(playerReport, logReport, gMember.name);
            this.setState({ members : gMembers });
          })
        })
      })
    })
  }

  renderMember(member){
    return <Player player={member} key={member.name}/>
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
              <th>Guild Points</th>
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
