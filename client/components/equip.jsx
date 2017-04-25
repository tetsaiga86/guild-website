import React from 'react'
import {

} from 'react-bootstrap'

const avatarUrl = 'http://render-api-us.worldofwarcraft.com/static-render/us/';
class Equip extends React.Component{

  render(){
    return(
      <div>
        {this.props.item.name}
      </div>
    )
  }
}

export default Equip
