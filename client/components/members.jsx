import React from 'react'
import Header from './header'
import Player from './player'
import {
  Table
} from 'react-bootstrap'

const guildMembersUrl = `https://us.api.battle.net/wow/guild/kiljaeden/f%20o%20o%20l%20s%20a%20v%20a%20g%20e?fields=members&locale=en_US&apikey=${ENV.api_key}`;
const logReportIdsUrl = `https://www.warcraftlogs.com:443/v1/reports/guild/f%20o%20o%20l%20s%20a%20v%20a%20g%20e/kiljaeden/US?api_key=${ENV.wow_logs_api_key}`
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
      const gMembers = guildMembersJson.members.filter(member => member.rank<=4);
      $.getJSON(logReportIdsUrl, (logReportIds) => {
        var lastFourLogIds=[];
        logReportIds=logReportIds.filter(log => log.owner=="srprise");
        for (var i = logReportIds.length-1; i > logReportIds.length-4; i--) {
          lastFourLogIds.push(logReportIds[i].id);
        }
        lastFourLogIds.forEach(logId => {
          $.getJSON(`https://www.warcraftlogs.com/v1/report/fights/${logId}?api_key=${ENV.wow_logs_api_key}`, (logJson) => {
            lastFourLogJson.push(logJson);
            if (lastFourLogJson.length === 3) {
              gMembers.forEach(gMember => {
                $.getJSON(`https://www.warcraftlogs.com/v1/parses/character/${gMember.character.name}/kiljaeden/US?api_key=${ENV.wow_logs_api_key}`, (playerReport) => {
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
