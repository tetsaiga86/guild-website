import React from 'react'
import Equip from './equip'
import {

} from 'react-bootstrap'

const avatarUrl = 'http://render-api-us.worldofwarcraft.com/static-render/us/';

const leftColumn = ['head', 'neck', 'shoulder', 'back', 'chest', 'wrist']
const rightColumn = ['hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2']
const bottomRow = ['mainHand', 'offHand']


class Armory extends React.Component{
  createEquip(gearArray){
    var equipArray=[];
    if(this.props.data){
      for (var i = 0; i < gearArray.length; i++) {
        if(this.props.data.items[gearArray[i]]){
          equipArray.push(<Equip item={this.props.data.items[gearArray[i]]} />)
        }
      }
    }else{
      for (var i = 0; i < gearArray.length; i++) {
        equipArray.push(<img className='spinner' src='/images/hourglass.svg' />);
      }
    }
    return equipArray;
  }
  render(){
    return(
      <div className="armory" style={{"backgroundImage": `url(${avatarUrl + this.props.character.thumbnail.replace('avatar.jpg', 'profilemain.jpg')})`}}>
        <div className="left-gear">
          {this.createEquip(leftColumn)}
        </div>
        <div className="right-gear">
          {this.createEquip(rightColumn)}
        </div>
        <div className="bottom-gear">
          {this.createEquip(bottomRow)}
        </div>
      </div>
    )
  }
}

export default Armory
