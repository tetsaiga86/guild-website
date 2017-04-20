import React from 'react'
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


  getGuildPoints(player){
    return 'wip';
  }

  render(){
    const character = this.props.player.character;
    return(
      <tr>
        <td>
          <img className="playerImg" src={avatarUrl + character.thumbnail} />
          {character.name}
        </td>
        <td>
          {character.class}
        </td>
        <td>
          {character.spec && character.spec.name}
        </td>
        <td>
          {character.achievementPoints}
        </td>
        <td>
          {this.getGuildPoints(character.name)}
        </td>
      </tr>
    )
  }

}

export default Player
