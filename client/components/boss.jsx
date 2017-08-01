import React from 'react'
import bossImages from '../data/boss_images'
import unixTime from '../util/unix_time'
import {
  Table
} from 'react-bootstrap'

class Boss extends React.Component {
  render () {
    const boss = this.props.boss;
    return(
    <tr>
      <td>
        <img className="bossImg" src={bossImages[boss.id]} />
        {boss.name}
      </td>
      <td>
        {
        !!boss.heroicKills &&
        <img className="skullImg" src="/images/heroic_icon.png"></img>
        }
        {!!boss.heroicTimestamp && unixTime(boss.heroicTimestamp)}
      </td>
      <td>
        {
        !!boss.mythicKills &&
        <img className="skullImg" src="/images/heroic_icon.png"></img>
        }
        {!!boss.mythicTimestamp && unixTime(boss.mythicTimestamp)}
      </td>
    </tr>
    )
  }
}

export default Boss
