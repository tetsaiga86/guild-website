import React from 'react'
import Collapsible from './collapsible'
import Boss from './boss'
import bossImages from '../data/boss_images'
import {
  Table
} from 'react-bootstrap'

class Boss extends React.Component {
  render () {
    const boss = this.props.boss;
    return(
    <tr>
      <td><img className="bossImg" src={bossImages[boss.id]} />{boss.name}</td>
      <td>{
          boss.killedDate && 
          <img className="skullImg" src="/images/heroic_icon.png"></img>
        }</td>
      <td>{boss.killedDate}</td>
    </tr>
    )
  }
}

export default Raid
/*
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
*/
