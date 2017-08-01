import React from 'react'
import Achievement from './achievement'
import {
  Table
} from 'react-bootstrap'

class Achievements extends React.Component {
  renderAchievement(achievement){
    return <Achievement achievement={achievement} key={achievement.id}/>
  }

  renderAchievements(){
    return this.props.achievements.map(this.renderAchievement);
  }

  render () {
    return (
      <Table striped bordered condensed hover className="achievement-table">
        <thead>
          <tr>
            <th className="achievement-table-head">
              Achievement Name
            </th>
            <th className="achievement-table-head">
              Date Completed
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderAchievements()}
        </tbody>
      </Table>
    )
  }
}

export default Achievements
