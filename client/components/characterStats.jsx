import React from 'react'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'

class CharacterStats extends React.Component{
  renderStats(statName){
    if(this.props.data){
      if(this.props.data.stats[statName]) return this.props.data.stats[statName];
      else if (statName=='mana5' && this.props.data.stats[statName]==0) return '--'
      else return 0;
    }
    else return 'Loading...';
  }

  statPopover(stat){
    if(this.props.data){
      var stats = this.props.data.stats;
      if(!stats[stat]) return (
        <Popover className='popover' id={stat}>
          Not Available
        </Popover>
      );
      var statInfo = (
        <Popover className='popover' id={stat}>
          {stats[stat]}
        </Popover>
      )
      return statInfo;
    }else{
      return (
        <Popover id={stat}>
          loading...
        </Popover>
      )
    }

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
          <Row className="character-stats-row">
            <Col xs={6} md={4} className="character-attributes">
              <strong>Attributes</strong>
              <h4>Strength: {this.renderStats('str')}</h4>
              <h4>Agility: {this.renderStats('agi')}</h4>
              <h4>Intellect: {this.renderStats('int')}</h4>
              <h4>Stamina: {this.renderStats('sta')}</h4>
            </Col>
            <Col xs={6} md={4} className="character-defense">
              <strong>Defense</strong>
              <h4>Armor: {this.renderStats('armor')}</h4>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('dodgeRating')}>
                <h4>Dodge: {this.makePercent(this.renderStats('dodge'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('parryRating')}>
                <h4>Parry: {this.makePercent(this.renderStats('parry'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('blockRating')}>
                <h4>Block: {this.makePercent(this.renderStats('block'))}</h4>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row className="character-stats-row">
            <Col xs={6} md={4} className="character-attack-spell">
              <strong>Attack</strong>
              <h4>Damage: {this.renderStats('mainHandDmgMin')}-{this.renderStats('mainHandDmgMax')}</h4>
              <h4 id="character-spell-speed">Speed: {this.renderStats('mainHandSpeed')}</h4>
              <strong>Spell</strong>
              <h4>Mana Regen: {this.renderStats('mana5')}</h4>
            </Col>
            <Col xs={6} md={4} className="character-enhancements">
              <strong>Enhancements</strong>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('critRating')}>
                <h4>Crit: {this.makePercent(this.renderStats('crit'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('hasteRating')}>
                <h4>Haste: {this.makePercent(this.renderStats('haste'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('masteryRating')}>
                <h4>Mastery: {this.makePercent(this.renderStats('mastery'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('leechRating')}>
                <h4>Leech: {this.makePercent(this.renderStats('leech'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('versatility')}>
                <h4>Versatility: {this.makePercent(this.renderStats('versatilityDamageDoneBonus'))}</h4>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} overlay={this.statPopover('avoidanceRating')}>
                <h4>Avoidance: {this.makePercent(this.renderStats('avoidanceRating')+this.renderStats('avoidanceRatingBonus'))}</h4>
              </OverlayTrigger>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default CharacterStats
