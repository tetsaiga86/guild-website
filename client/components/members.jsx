import React from 'react'
import Header from './header'
import Player from './player'
import {
  Table
} from 'react-bootstrap'

const guildMembersUrl = `https://us.api.battle.net/wow/guild/kiljaeden/f%20o%20o%20l%20s%20a%20v%20a%20g%20e?fields=members&locale=en_US&apikey=${ENV.api_key}`

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
    $.getJSON(guildMembersUrl, (guildMembersJson) => {
      const gMembers = guildMembersJson.members.filter(member => member.rank<=4);
      this.setState({ members : gMembers });
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
