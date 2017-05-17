import React from 'react'
import Achievement from './achievement'

class Achievements extends React.Component {
  renderAchievement(achievement){
    return <Achievement achievement={achievement} />
  }

  renderAchievements(){
    return this.props.achievements.map(this.renderAchievement);
  }

  render () {
    return (
      <tbody>
        {this.renderAchievements()}
      </tbody>
    )
  }
}

export default Achievements
