import React from 'react'
import Header from './header'
import Player from './player'
import classID from '../data/character_class_id'
import $ from 'jquery'
import {
  Table,
  SplitButton,
  MenuItem,

} from 'react-bootstrap'

const guildMembersUrl = `/api/guild_members`;
const logReportUrl = `/api/latest_logs`;

class Members extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      members: [],
      sortBy: 'Name'
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
    console.log(this.state.members);
    switch(this.state.sortBy){
      case 'Item Level':
        this.state.members.sort((a,b) => {
          if (a.body.items.averageItemLevel > b.body.items.averageItemLevel) return -1
          if (a.body.items.averageItemLevel < b.body.items.averageItemLevel) return 1
          return 0
        })
        break

      case 'Class':
        this.state.members.sort((a,b) => {
          if (classID[a.body.class] < classID[b.body.class]) return -1
          if (classID[a.body.class] > classID[b.body.class]) return 1
          return 0
        })
        break

      case 'Achievement Points':
        this.state.members.sort((a,b) => {
          if (a.body.achievementPoints > b.body.achievementPoints) return -1
          if (a.body.achievementPoints < b.body.achievementPoints) return 1
          return 0
        })
        break

      case 'Dkp':
        this.state.members.sort((a,b) => {
          if (a.dkp.net_dkp > b.dkp.net_dkp) return -1
          if (a.dkp.net_dkp < b.dkp.net_dkp) return 1
          return 0
        })
        break

      default:
        this.state.members.sort((a,b) => {
          if (a.body.name < b.body.name) return -1
          if (a.body.name > b.body.name) return 1
          return 0
        })
    }
    return this.state.members.map(this.renderMember);
  }

  render () {
    return (
      <div>
        <Header />
        <h1>Sort By:</h1>
        <br/>
        <SplitButton bsStyle='default' title={this.state.sortBy} key={'SplitButton'}>
          <MenuItem eventKey="1" onClick={() => {this.setState({ sortBy : 'Name' })}}>Name</MenuItem>
          <MenuItem eventKey="2" onClick={() => {this.setState({ sortBy : 'Item Level' })}}>Item Level</MenuItem>
          <MenuItem eventKey="3" onClick={() => {this.setState({ sortBy : 'Class' })}}>Class</MenuItem>
          <MenuItem eventKey="4" onClick={() => {this.setState({ sortBy : 'Achievement Points' })}}>Achievement Points</MenuItem>
          <MenuItem eventKey="5" onClick={() => {this.setState({ sortBy : 'Dkp' })}}>Dkp</MenuItem>
        </SplitButton>
        <Table striped bordered condensed hover className="members-table">
          <thead>
            <tr>
              <th>
                Name
              </th>
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
