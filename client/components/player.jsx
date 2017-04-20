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
    const player = this.props.player;
    return(
      <tr>
        <td>
          <img className="playerImg" src={avatarUrl + player.thumbnail} />
          {player.name}
        </td>
        <td>
          {player.class}
        </td>
        <td>
          {player.spec.name}
        </td>
        <td>
          {player.achievementPoints}
        </td>
        <td>
          {this.getGuildPoints(player.name)}
        </td>
      </tr>
    )
  }

}

export default Player
