import React from 'react'
import Header from './header'
import Player from './player'
import {
  Table
} from 'react-bootstrap'

const guildMembersUrl = `https://us.api.battle.net/wow/guild/kiljaeden/f%20o%20o%20l%20s%20a%20v%20a%20g%20e?fields=members&locale=en_US&apikey=${ENV.api_key}`;
const logReportIdsUrl = 'https://www.warcraftlogs.com:443/v1/reports/guild/f%20o%20o%20l%20s%20a%20v%20a%20g%20e/kiljaeden/US?api_key=65a59b7957c1781ece4c1ffed13e442b'


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

  calculateGuildPoints(playerReport){
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

    return Math.floor((performance+attendance)/2);
  }

  fetchGuildMembers(){
    $.getJSON(guildMembersUrl, (guildMembersJson) => {
      const gMembers = guildMembersJson.members.filter(member => member.rank<=4);
      $.getJSON(logReportIdsUrl, (logReportIds) => {
        logReportIds=logReportIds.filter(log => log.owner=="srprise");
        // FIXME: 
        console.log(logReportIds);
        gMembers.forEach(gMember => {
          $.getJSON(`https://www.warcraftlogs.com/v1/parses/character/${gMember.character.name}/kiljaeden/US?api_key=65a59b7957c1781ece4c1ffed13e442b`, (playerReport) => {
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
            gMember.character.gp=this.calculateGuildPoints(playerReport);
            this.setState({ members : gMembers });
          })
        });
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
