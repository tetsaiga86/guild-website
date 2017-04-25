import React from 'react'
import classID from '../data/character_class_id'
import CharacterModal from './characterModal'
import {
  Table
} from 'react-bootstrap'

const avatarUrl = 'http://render-api-us.worldofwarcraft.com/static-render/us/';
const imgType = {
  avatar: 'avatar.jpg',
  inset: 'inset.jpg',
  profileMain: 'profilemain.jpg'
}

class Player extends React.Component{
  constructor(props) {
    super(props);

    this.state = { showModal: false };
    this.onRequestClose = this.onRequestClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  getGuildPoints(player){
    return player.gp;
  }

  onOpen () {
    this.setState({ showModal: true });
  }

  onRequestClose () {
    this.setState({ showModal: false });
  }

  render(){
    const character = this.props.player.character;
    return(
      <tr onClick={this.onOpen}>
        <CharacterModal character={character} show={this.state.showModal} onRequestClose={this.onRequestClose}/>
        <td>
          <img className="playerImg" src={avatarUrl + character.thumbnail} />
          {character.name}
        </td>
        <td className="members-table-cell">
          {classID[character.class]}
        </td>
        <td className="members-table-cell">
          {character.spec && character.spec.name}
        </td>
        <td className="members-table-cell">
          {character.achievementPoints}
        </td>
        <td className="members-table-cell">
          {this.getGuildPoints(character)}
        </td>
        <td className="members-table-cell">
          {character.ilvl || 'Not Available'}
        </td>
      </tr>
    )
  }

}

export default Player
