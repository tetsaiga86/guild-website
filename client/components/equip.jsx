import React from 'react'
import {
Popover,
OverlayTrigger,
} from 'react-bootstrap'

const iconUrl = 'http://media.blizzard.com/wow/icons/56/';
const itemUrl = 'http://us.battle.net/wow/en/item/';
class Equip extends React.Component{
  getArtifactRank(item){
    //console.log(item);
    if(item.artifactTraits.length>0){
      var counter=0;
      for (var i = 0; i < item.artifactTraits.length; i++) {
        counter+=item.artifactTraits[i].rank;
      }
      return `Artifact Weapon Rank: ${counter-item.relics.length}`;
    }
  }

  getArmor(item){
    if(item.armor) return `${item.armor} Armor`
  }

  render(){
    var item = this.props.item
    var itemStyle = {
      backgroundPosition : `-${(item.quality+1)*49}px 0`
    }
    var popover = (
      <Popover className='popover' id={item.id}>
        <h2>{item.name}</h2>
        <h4>{this.getArtifactRank(item)}</h4>
        <h5>{`Item Level: ${item.itemLevel}`}</h5>
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <h5>{this.getArmor(item)}</h5>
      </Popover>
    )
    return(
      <div className="frame" style={itemStyle}>
        {
          <OverlayTrigger trigger={['hover', 'focus']} overlay={popover}>
            <a href={`${itemUrl}${item.id}/${item.context}`} target="_blank">
              <img src={iconUrl+item.icon+'.jpg'} className="equip-icon" />

            </a>
          </OverlayTrigger>
        }
      </div>
    )
  }
}

export default Equip
