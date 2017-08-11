import React from 'react'
import Equip from './equip'
import CharacterStats from './characterStats'
import CharacterTalents from './characterTalents'
import {
  Grid,
  Row,
  Clearfix,
  Col,
} from 'react-bootstrap'

const avatarUrl = 'https://render-us.worldofwarcraft.com/character/';

export const leftColumn = ['head', 'neck', 'shoulder', 'back', 'chest', 'wrist', 'hands']
export const rightColumn = ['waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2']
export const bottomRow = ['mainHand', 'offHand']


class Armory extends React.Component{
  createEquip(gearArray){
    var equipArray=[];
    if(this.props.data){
      if(gearArray==leftColumn){
        for (var i = 0; i < gearArray.length; i++) {
          if(this.props.data.items[gearArray[i]]){
            equipArray.push(<Equip key={`left${i}`} position='right' item={this.props.data.items[gearArray[i]]} />)
          }
        }
      }else if (gearArray==rightColumn) {
        for (var i = 0; i < gearArray.length; i++) {
          if(this.props.data.items[gearArray[i]]){
            equipArray.push(<Equip key={`right${i}`} position='left' item={this.props.data.items[gearArray[i]]} />)
          }
        }
      }else{
        for (var i = 0; i < gearArray.length; i++) {
          if(this.props.data.items[gearArray[i]]){
            equipArray.push(<Equip key={`bottom${i}`} position='top' item={this.props.data.items[gearArray[i]]} />)
          }
        }
      }
    }else{
      equipArray.push(<img className='spinner' src='/images/hourglass.svg' />);
    }
    return equipArray;
  }

  render(){
    return(
      <div>
        <div className="armory" style={{"backgroundImage": `url(${avatarUrl + this.props.character.thumbnail.replace('avatar.jpg', 'profilemain.jpg')})`}}>
          <div className="left-gear">
            {this.createEquip(leftColumn)}
          </div>
          <div className="bottom-gear">
            {this.createEquip(bottomRow)}
          </div>
          <div className="right-gear">
            {this.createEquip(rightColumn)}
          </div>
        </div>
        <CharacterStats data={this.props.data} />
        <CharacterTalents data={this.props.data} />
      </div>
    )
  }
}

export default Armory
