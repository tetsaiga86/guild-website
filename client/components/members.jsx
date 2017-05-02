import React from 'react'
import Header from './header'
import Player from './player'
import {
  Table
} from 'react-bootstrap'

const guildMembersUrl = `/api/guild_members`;
const logReportIdsUrl = `/api/log_ids`;
var lastFourLogJson=[];

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
        if(name=="Lëmmiwinks") console.log(name, attendingDate);
        switch(attendingDayOfWeek) {
          case 2:
            attendance+=50;
            break;
          case 3:
          case 4:
            attendance+=225;
            break;
        }
        attendance=attendance/3*12
      }
    })
    return Math.floor((performance+attendance)/2);
  }

  fetchGuildMembers(){
    $.getJSON(guildMembersUrl, (guildMembersJson) => {
      const gMembers = guildMembersJson;
      // FIXME: return log record instead of log id
      $.getJSON(logReportIdsUrl, (logReportIds) => {
        var lastFourLogIds=[];
        // FIXME: move filter to proxy controller
        logReportIds=logReportIds.filter(log => log.owner=="srprise");
        for (var i = logReportIds.length-1; i > logReportIds.length-4; i--) {
          lastFourLogIds.push(logReportIds[i].id);
        }
        lastFourLogIds.forEach(logId => {
          $.getJSON(`/api/log/${logId}`, (logJson) => {
            lastFourLogJson.push(logJson);
            if (lastFourLogJson.length === 3) {
              gMembers.forEach(gMember => {
                $.getJSON(`/api/character_parse/${gMember.character.name}`, (playerReport) => {
                  playerReport = playerReport.filter(report => report.difficulty>=4);
                  gMember.character.ilvl=0;
                  playerReport.forEach(playerReport =>{
                    playerReport.specs.forEach(spec => {
                      spec.data.forEach(data =>{
                        if(gMember.character.ilvl<data.ilvl){
                          gMember.character.ilvl = data.ilvl;
                        }
                      })
                    })
                  })
                  gMember.character.gp=this.calculateGuildPoints(playerReport, lastFourLogJson, gMember.character.name);
                  this.setState({ members : gMembers });
                })
              });
            }
          })
        })
      })
    })
  }

  renderMember(member){
    return <Player player={member} key={member.character.name}/>
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
