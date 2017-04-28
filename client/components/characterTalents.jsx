import React from 'react'
import Collapsible from './collapsible'
import {
  Grid,
  Row,
  Clearfix,
  Col,
} from 'react-bootstrap'

class CharacterTalents extends React.Component{
  constructor (props) {
    super(props);

    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  renderTalents(talentsArr){
    var talentNames = [];
    if (this.props.data) {
      for (var i = 0; i < talentsArr.length; i++) {
        talentNames.push(<h5>{talentsArr[i].spell.name}</h5>)
      }
      return talentNames.map((talent) => {
        return talent;
      });
    }
  }

  renderSpecs(){
    if(this.props.data){
      var collapsibleArray = [];
      var talents = this.props.data.talents;
      const state = this.state;
      console.log('talents', talents);
      var length = talents.filter(talent => {return talent.talents.length > 0}).length
      for (var i = 0; i < length; i++) {
        const talent = talents[i];
        const specName = talent.spec.name;
        collapsibleArray.push(
          <Collapsible title={specName} in={!!state[specName]} key={specName} onToggle={() => this.onToggle(talent)}>
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
    console.log('togglespec', toggleSpec)
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
