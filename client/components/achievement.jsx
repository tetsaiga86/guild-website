import React from 'react'
import unixTime from '../util/unix_time'
import {
  Table
} from 'react-bootstrap'

class Achievement extends React.Component{
  render(){
    return(
      <tr>
        <td className="achievement-table-cell">{this.props.achievement.id}</td>
        <td className="achievement-table-cell">{unixTime(this.props.achievement.timestamp)}</td>
      </tr>
    )
  }
}

export default Achievement
