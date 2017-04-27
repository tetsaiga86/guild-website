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

  renderTalents(talentName){
    if (this.props.data) {
      return this.props.data.talents[talentName];
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
      for (var i = 0; i < talents.length-1; i++) {
        collapsibleArray.push(<Collapsible title={talents[i].spec.name} in={talents[i].in} key={talents[i].spec.name} onToggle={() => this.onToggle(talents[i])}/>)
      }
      return collapsibleArray.map(col => {
        return col;
      });
    }
    return <h2>Loading...</h2>
  }

  onToggle (toggleSpec) {
    const newState = !toggleSpec.in;
    this.setState({
      specs: this.state.specs.map((spec) => {
        spec.in = raid == toggleRaid ? newState : false;
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
