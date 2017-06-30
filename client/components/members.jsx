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
      descending: false
    };
  }

  componentDidMount(){
    this.fetchGuildMembers();
  }

  fetchGuildMembers(){
    $.getJSON(guildMembersUrl, (members) => {
      this.onSortBy(this.state.sortBy, this.state.descending, members)
    })
  }

  renderMember(member){
    return <Player player={member} key={member.body.name}/>
  }

  renderArrow(columnName){
    if(this.state.sortBy==columnName){
      if(this.state.descending){
        return <img src='/images/up-arrow.png'></img>
      }else{
        return <img src='/images/down-arrow.png'></img>
      }
    }
  }

  onColumnHeaderClick(columnName) {
    if (this.state.sortBy == columnName) {
      // as before
      this.onSortBy(columnName, !this.state.descending)
    } else {
      this.onSortBy(columnName, false)
    }
  }

  renderColumnHead(columnName){
    return(
      <th className="members-table-head" onClick={() => {
        this.onColumnHeaderClick(columnName)
      }}>
        {columnName}
        {this.renderArrow(columnName)}
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

  onSortBy(sortBy, descending, members) {
    let newMembers = members || [...this.state.members];

    const compareFn = this.generateComparisonFn(sortBy);
    const directionalCompareFn = (a, b) => {
      if (descending) {
        [a, b] = [b, a]
      }
      return compareFn(a, b)
    }
    newMembers.sort(directionalCompareFn)
    this.setState({
      members: newMembers,
      sortBy,
      descending
    })
  }

  generateComparisonFn(columnName) {
    switch(columnName){
      case 'Item Level':
        return (a, b) => { return b.body.items.averageItemLevel - a.body.items.averageItemLevel }
      case 'Class':
        return (a, b) => { return classID[a.body.class].localeCompare(classID[b.body.class]) }
      case 'Achievement Points':
        return (a, b) => { return b.body.achievementPoints - a.body.achievementPoints }
      case 'Dkp':
        return (a, b) => { return b.dkp.net_dkp - a.dkp.net_dkp }
      case 'Spec':
        return (a, b) => { return this.getCharacterspec(a.body).localeCompare(this.getCharacterspec(b.body)) }
      default:
        return (a, b) => { return a.body.name.localeCompare(b.body.name) }
    }
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
              {this.renderColumnHead('Name')}
              {this.renderColumnHead('Class')}
              {this.renderColumnHead('Spec')}
              {this.renderColumnHead('Achievement Points')}
              {this.renderColumnHead('Dkp')}
              {this.renderColumnHead('Item Level')}
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
