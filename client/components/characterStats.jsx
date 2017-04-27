import React from 'react'
import {
  Grid,
  Row,
  Clearfix,
  Col,
} from 'react-bootstrap'

class CharacterStats extends React.Component{
  renderStats(statName){
    if(this.props.data){
      if(this.props.data.stats[statName]) return this.props.data.stats[statName];
      else if (statName=='mana5' && this.props.data.stats[statName]==0) return '--'
      else return 0;
    } else return 'Loading...';
  }

  makePercent(num){
    if(num==0) return '0.00%';
    if(num=='Loading...') return 'Loading...';
    return (Math.round(num*100)/100+'%');
  }

  render(){
    return(
      <div>
        <Grid className="character-stats">
          <Row>
            <Col xs={12} md={8} className="character-attributes">
              <strong>Attributes</strong>
              <h4>Strength: {this.renderStats('str')}</h4>
              <h4>Agility: {this.renderStats('agi')}</h4>
              <h4>Intellect: {this.renderStats('int')}</h4>
              <h4>Stamina: {this.renderStats('sta')}</h4>
            </Col>
            <Col xs={12} md={8} className="character-defense">
              <strong>Defense</strong>
              <h4>Armor: {this.renderStats('armor')}</h4>
              <h4>Dodge: {this.makePercent(this.renderStats('dodge'))}</h4>
              <h4>Parry: {this.makePercent(this.renderStats('parry'))}</h4>
              <h4>Block: {this.makePercent(this.renderStats('block'))}</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8} className="character-attack-spell">
              <strong>Attack</strong>
              <h4>Damage: {this.renderStats('mainHandDmgMin')}-{this.renderStats('mainHandDmgMax')}</h4>
              <h4>Speed: {this.renderStats('mainHandSpeed')}</h4>
              <strong>Spell</strong>
              <h4>Mana Regen: {this.renderStats('mana5')}</h4>
            </Col>
            <Col xs={12} md={8} className="character-enhancements">
              <strong>Enhancements</strong>
              <h4>Crit: {this.makePercent(this.renderStats('crit'))}</h4>
              <h4>Haste: {this.makePercent(this.renderStats('haste'))}</h4>
              <h4>Mastery: {this.makePercent(this.renderStats('mastery'))}</h4>
              <h4>Leech: {this.makePercent(this.renderStats('leech'))}</h4>
              <h4>Versatility: {this.makePercent(this.renderStats('versatility'))}</h4>
              <h4>Avoidance: {this.makePercent(this.renderStats('avoidanceRating')+this.renderStats('avoidanceRatingBonus'))}</h4>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default CharacterStats
