import React from 'react'
import {
  Table
} from 'react-bootstrap'

class NewsPiece extends React.Component{
  render(){
    var player = this.props.piece.character;
    var item = this.props.piece.itemId;
    return(
      <tr>
        <td className="achievement-table-cell">{player} has looted {item}</td>
      </tr>
    )
  }
}

export default NewsPiece
