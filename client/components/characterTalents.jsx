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

    this.state = {
      specs: []
    };
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
      talents.forEach(spec => {
        spec.in = false;
      })
      console.log('talents', talents);
      for (var i = 0; i < talents.filter(talent => {return talent.talents.length > 0}).length; i++) {
        collapsibleArray.push(
          <Collapsible title={talents[i].spec.name} in={talents[i].in} key={talents[i].spec.name} onToggle={() => this.onToggle(talents[i])}>
            {this.renderTalents(talents[i].talents)}
          </Collapsible>
        )
      }
      return collapsibleArray.map(col => {
        return col;
      });
    }
    return <h2>Loading...</h2>
  }

  onToggle (toggleSpec) {
    const newState = !toggleSpec.in;
    this.setState({ specs:this.props.data.talents })
    this.setState({
      specs: this.state.specs.map((spec) => {
        spec.in = spec == toggleSpec ? newState : false;
        return spec;
      })
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
