import React from 'react'
import Collapsible from './collapsible'
import bossImages from '../data/boss_images'
import {
  Table
} from 'react-bootstrap'

class Boss extends React.Component {
  render () {
    const boss = this.props.boss;
    return(
    <tr>
      <td><img className="bossImg" src={bossImages[boss.id]} />{boss.description}</td>
      <td>{
          boss.killedDate &&
          <img className="skullImg" src="/images/heroic_icon.png"></img>
        }</td>
      <td>{boss.killedDate}</td>
    </tr>
    )
  }
}

export default Boss