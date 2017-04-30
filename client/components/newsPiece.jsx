import React from 'react'
import {
  Table
} from 'react-bootstrap'
import Equip from './equip'

const itemUrl = 'http://us.battle.net/wow/en/item/';
class NewsPiece extends React.Component{
  render(){
    var player = this.props.piece.character;
    var item = this.props.piece.item;
    return(
      <tr>
        <td className="achievement-table-cell" onClick={()=> window.open(`${itemUrl}${item.id}/${item.context}`)}>
          <Equip position='left' item={item} />
          {player} has looted {item.name}
        </td>
      </tr>
    )
  }
}

export default NewsPiece
