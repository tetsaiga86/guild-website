import React from 'react'
import Collapsible from './collapsible'
import Boss from './boss'
import {
  Table
} from 'react-bootstrap'

class Raid extends React.Component {
  renderBoss (boss) {
    return <Boss boss={boss} key={boss.id}/>;
  }

  renderBosses () {
    return this.props.raid.bosses.map(this.renderBoss);
  }

  render () {
    const raid = this.props.raid;
    //console.log('raid', raid.title, raid.in)
    return (
      <Collapsible title={raid.name} in={raid.in} key={raid.name} onToggle={this.props.onToggle}>
        <Table striped bordered condensed hover className='raid-table'>
          <thead>
            <tr>
              <th>Boss</th>
              <th>Heroic Kill</th>
              <th>Mythic Kill</th>
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
