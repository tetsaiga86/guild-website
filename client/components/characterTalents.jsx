import React from 'react'
import Collapsible from './collapsible'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'

class CharacterTalents extends React.Component{
  constructor (props) {
    super(props);

    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  popover(string){
    return(
      <Popover id={string}>
        {string}
      </Popover>
    )
  }

  renderTalents(talentsArr){
    var talentNames = [];
    talentsArr.sort((a,b) =>{
      return a.tier-b.tier;
    })
    if (this.props.data) {
      for (var i = 0; i < talentsArr.length; i++) {
        var spellUrl = `http://media.blizzard.com/wow/icons/36/${talentsArr[i].spell.icon}.jpg`
        talentNames.push(
          <OverlayTrigger key={i} trigger={['hover', 'focus']} placement="bottom" overlay={this.popover(talentsArr[i].spell.description)}>
            <div className="talent-div">
              <img className="talent-icon" src={spellUrl} />
              <h3>{talentsArr[i].spell.name}</h3>
            </div>
          </OverlayTrigger>
        )
      }
      return talentNames;
    }
  }

  renderSpecs(){
    if(this.props.data){
      var collapsibleArray = [];
      var talents = this.props.data.talents;
      const state = this.state;
      var length = talents.filter(talent => {return talent.talents.length > 0}).length
      for (var i = 0; i < length; i++) {
        const talent = talents[i];
        const specName = talent.spec.name;
        const popoverString = talent.spec.description;
        const icon = `http://media.blizzard.com/wow/icons/36/${talent.spec.icon}.jpg`;
        collapsibleArray.push(
          <Collapsible title={specName} popoverInfo={popoverString} iconUrl={icon} in={!!state[specName]} key={specName} onToggle={() => this.onToggle(talent)}>
            {this.renderTalents(talent.talents)}
          </Collapsible>
        )
      }
      return collapsibleArray;
    }
    return <h2>Loading...</h2>
  }

  onToggle (talent) {
    const state = this.state;
    const toggleSpec = talent.spec;
    this.setState({
      ...state,
      [toggleSpec.name]: !state[toggleSpec.name]
    });
  }

  render(){
    return(
      <div>
        {this.renderSpecs()}
      </div>
    )
  }

}

export default CharacterTalents
