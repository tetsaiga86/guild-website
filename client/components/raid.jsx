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
    //console.log('raid', raid.title, raid.in)
    return (
      <Collapsible title={raid.title} in={raid.in} key={raid.title} onToggle={this.props.onToggle}>
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
