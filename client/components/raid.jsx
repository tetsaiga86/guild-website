import React from 'react'
import Collapsible from './collapsible'
import Boss from './boss'
import {
  Table
} from 'react-bootstrap'

class Raid extends React.Component {
  constructor(props){
    super(props);

    this.raid = props.raid;
  }

  renderBoss (boss) {
    return <Boss boss={boss} key={boss.id}/>;
  }

  renderBosses () {
    return this.raid.criteria.map(this.renderBoss);
  }

  render () {
    const raid = this.raid;
    return (
      <Collapsible title={raid.title} defaultOpen={this.props.defaultOpen} key={raid.title} >
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Boss</th>
              <th>Killed</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBosses()}
          </tbody>
        </Table>
      </Collapsible>
    )
  }
}

export default Raid
/*
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
*/
