import React from 'react'
import Collapsible from './collapsible'
import ButtonGroup from './buttonGrp'
import Raid from './raid'
import fetchLeaderdata from '../util/fetch_leader_data'

class Progress extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      raids: []
    };
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillMount() {
      fetchLeaderdata((data) => {
        this.setState( { raids: data });
      });
  }

  onToggle (toggleRaid) {
    const newState = !toggleRaid.in;
    this.setState({
      raids: this.state.raids.map((raid) => {
        raid.in = raid == toggleRaid ? newState : false;
        return raid;
      })
    });
  }

  renderRaid(raid) {
    return <Raid raid={raid} key={raid.name} onToggle={() => this.onToggle(raid)}/>;
  }

  renderRaids() {
    return this.state.raids.map((raid) => this.renderRaid(raid));
  }

  render() {
    return (
      <div>
        <h2>Progression</h2>
        <h4>Dates reflect our most recent kill</h4>
        {this.renderRaids()}
      </div>
    );
  }
}

export default Progress
