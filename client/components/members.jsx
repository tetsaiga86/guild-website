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
      sortBy: 'Name',
      descending: true
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

  getOrder(bool){
    return bool ? -1 : 1
  }

  renderSortArrows(columnName){
    return(
      <th className="members-table-head">
        <img src='/images/up-arrow.png'
          onClick={() => {this.setState({ sortBy : columnName, descending : false })}}></img>
        {columnName}
        <img src='/images/down-arrow.png'
          onClick={() => {this.setState({ sortBy : columnName, descending : true })}}></img>
      </th>
    )
  }

  getCharacterspec(character){
    for (var i = 0; character.talents && i < character.talents.length; i++) {
      if(character.talents[i].selected){
        return character.talents[i].spec.name
      }
    }
    return 'Not Available'
  }

  renderMembers(){
    let descending = this.state.descending
    switch(this.state.sortBy){
      case 'Item Level':
        this.state.members.sort((a,b) => {
          if (a.body.items.averageItemLevel > b.body.items.averageItemLevel) return this.getOrder(descending)
          if (a.body.items.averageItemLevel < b.body.items.averageItemLevel) return this.getOrder(!descending)
          return 0
        })
        break

      case 'Class':
        this.state.members.sort((a,b) => {
          if (classID[a.body.class] < classID[b.body.class]) return this.getOrder(descending)
          if (classID[a.body.class] > classID[b.body.class]) return this.getOrder(!descending)
          return 0
        })
        break

      case 'Achievement Points':
        this.state.members.sort((a,b) => {
          if (a.body.achievementPoints > b.body.achievementPoints) return this.getOrder(descending)
          if (a.body.achievementPoints < b.body.achievementPoints) return this.getOrder(!descending)
          return 0
        })
        break

      case 'Dkp':
        this.state.members.sort((a,b) => {
          if (a.dkp.net_dkp > b.dkp.net_dkp) return this.getOrder(descending)
          if (a.dkp.net_dkp < b.dkp.net_dkp) return this.getOrder(!descending)
          return 0
        })
        break

      case 'Spec':
        this.state.members.sort((a,b) => {
          if (this.getCharacterspec(a.body) > this.getCharacterspec(b.body)) return this.getOrder(!descending)
          if (this.getCharacterspec(a.body) < this.getCharacterspec(b.body)) return this.getOrder(descending)
          return 0
        })
        break

      default:
        this.state.members.sort((a,b) => {
          if (a.body.name < b.body.name) return this.getOrder(descending)
          if (a.body.name > b.body.name) return this.getOrder(!descending)
          return 0
        })
    }
    return this.state.members.map(this.renderMember);
  }

  render () {
    return (
      <div>
        <Header />
        <Table striped bordered condensed hover className="members-table">
          <thead>
            <tr>
              {this.renderSortArrows('Name')}
              {this.renderSortArrows('Class')}
              {this.renderSortArrows('Spec')}
              {this.renderSortArrows('Achievement Points')}
              {this.renderSortArrows('Dkp')}
              {this.renderSortArrows('Item Level')}
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
