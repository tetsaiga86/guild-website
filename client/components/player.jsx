import React from 'react'
import classID from '../data/character_class_id'
import CharacterModal from './characterModal'
import {
  Table
} from 'react-bootstrap'

const avatarUrl = 'http://render-us.worldofwarcraft.com/character/';
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
    this.onAvatarError = this.onAvatarError.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  getGuildPoints(player){
    return player.gp;
  }

  onOpen () {
    this.setState({ showModal : true });
  }

  onRequestClose () {
    this.setState({ showModal : false });
  }

  getCharacterspec(character){
    for (var i = 0; character.talents && i < character.talents.length; i++) {
      if(character.talents[i].selected){
        return character.talents[i].spec.name
      }
    }
    return 'Not Available'
  }

  onAvatarError(img){
    this.setState({error: true})
  }

  render(){
    const character = this.props.player;
    const playerAvatarUrl = avatarUrl + character.thumbnail;
    const playerImgUrl = this.state.error ? '/images/stick_thumbnail.jpg' : playerAvatarUrl;
    return(
      <tr onClick={this.onOpen}>
        <CharacterModal character={character} show={this.state.showModal} onRequestClose={this.onRequestClose}/>
        <td>
          <img className="playerImg" src={playerImgUrl} onError={this.onAvatarError}/>
          {character.name}
        </td>
        <td className="members-table-cell">
          {classID[character.class]}
        </td>
        <td className="members-table-cell">
          {this.getCharacterspec(character)}
        </td>
        <td className="members-table-cell">
          {character.achievementPoints}
        </td>
        <td className="members-table-cell">
          {this.getGuildPoints(character)}
        </td>
        <td className="members-table-cell">
          {character.items && character.items.averageItemLevel || 'Not Available'}
        </td>
      </tr>
    )
  }

}

export default Player
