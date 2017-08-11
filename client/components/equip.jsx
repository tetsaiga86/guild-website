import React from 'react'
import statMap from '../data/stat_id'
import enchant_list from '../data/enchant_id.json'
import {
Popover,
OverlayTrigger,
} from 'react-bootstrap'

const iconUrl = 'https://media.blizzard.com/wow/icons/56/';
const itemUrl = 'https://us.battle.net/wow/en/item/';
let gemKeyCounter = 0
class Equip extends React.Component{
  getArtifactRank(item){
    if(item.artifactTraits && item.artifactTraits.length){
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

  renderItemStats(itemStatsArr){
    if(!itemStatsArr.length) return;
    var statsArr=[];
    for (var i = 0; i < itemStatsArr.length; i++) {
      var statId=itemStatsArr[i].stat;
      var amount=itemStatsArr[i].amount;
      statsArr.push(<h5 key={i}>{`${statMap[statId]}: ${amount}`}</h5>)
    }
    return statsArr;
  }

  renderDescription(description){
    if(!description) return
    else return (<h5>{`Description: ${description}`}</h5>)
  }

  renderEnchant(item){
    if(!item.tooltipParams) return
    if(!item.tooltipParams.enchant) return
    let id = item.tooltipParams.enchant
    for (var i = 0; i < enchant_list.length; i++) {
      if (id == enchant_list[i]['id']) {
        return (<h5>{`Enchant: ${enchant_list[i].name_enus}`}</h5>)
      }
    }
    return 'Not Available'
  }

  renderNewsRelicInfo(item){
    if(!item.gemInfo) return
    if(!item.gemInfo.bonus) return
    if(item.gemInfo.bonus.name == "Relic Enhancement"){
      return(<h5>{item.gemInfo.type.type} {item.gemInfo.bonus.name}</h5>)
    }
  }

  renderNewsDescription(item){
    if(typeof item.description != "string") return
    if(!item.description) return
    else return (<h5>{`Description: ${item.description}`}</h5>)
  }

  renderSpellDescription(item){
    if(!item.description) return
    if(!item.description.itemSpells) return
    if(!item.description.itemSpells.length) return
    else if(!item.description.itemSpells[0].spell.description) return
    else return (<h5>{`Spell: ${item.description.itemSpells[0].spell.description}`}</h5>)
  }

  renderNewsSpellDescription(item){
    if(!item.itemSpells) return
    if(!item.itemSpells.length) return
    else if(!item.itemSpells[0].spell.description) return
    else return (<h5>{`Spell: ${item.itemSpells[0].spell.description}`}</h5>)
  }

  renderTransmogName(item){
    if(!item.transmog) return
    else return (<h5>{`Transmog: ${item.transmog.name}`}</h5>)
  }

  renderGems(item){
    if(!item.gems) return
    let gems = []
    for (var i = 0; i < item.gems.length; i++) {
      let name = item.gems[i].name
      let bonusName = item.gems[i].gemInfo.bonus.name
      if(bonusName != 'Relic Enhancement'){
        gems.push(<h5 key={gemKeyCounter}>Gem: {name} {bonusName}</h5>)
      }else{
        gems.push(<h5 key={gemKeyCounter}>{item.gems[i].gemInfo.type.type} Relic: {name} </h5>)
      }
      gemKeyCounter++
    }
    return gems
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
        {this.renderItemStats(item.stats || item.bonusStats)}
        {this.renderDescription(item.description.description)}
        {this.renderSpellDescription(item)}
        {this.renderNewsSpellDescription(item)}
        {this.renderNewsRelicInfo(item)}
        {this.renderNewsDescription(item)}
        {this.renderTransmogName(item)}
        {this.renderGems(item)}
        {this.renderEnchant(item)}
        <h5></h5>
        <h5>{this.getArmor(item)}</h5>
      </Popover>
    )
    return(
      <div className="frame" style={itemStyle}>
        {
          <OverlayTrigger trigger={['hover', 'focus']} placement={this.props.position} overlay={popover}>
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
