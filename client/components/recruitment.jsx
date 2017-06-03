import React from 'react'
import $ from 'jquery'

const recruitmentUrl = '/api/recruitment'
class Recruitment extends React.Component {
  componentWillMount () {
    this.setState({classes: []})
    $.getJSON(recruitmentUrl, (classes) => {
      this.setState({classes: classes})
    })
  }

  renderAnnouncements() {
    var liClasses = [];
    var counter = 0;
    this.state.classes.forEach(character => {
      liClasses.push(
        <li key={counter}>
          <img src={character.img_url}></img>
          `${character.name} ${character.class_name}`
        </li>
      );
      counter++;
    });
    return <ul>{announcements}</ul>;
  }
  render () {
    return (
      <div className="recruitment-list">
        <h2>Recruitment</h2>
        <ul>
          <li><img></img>Death Knight</li>
          <li><img></img>Demon Hunter</li>
          <li><img></img>Druid</li>
          <li><img></img>Hunter</li>
          <li><img></img>Mage</li>
          <li><img></img>Monk</li>
          <li><img></img>Paladin</li>
          <li><img></img>Priest</li>
          <li><img></img>Rogue</li>
          <li><img></img>Shaman</li>
          <li><img></img>Warlock</li>
          <li><img></img>Warrior</li>
        </ul>
      </div>
    )
  }
}

export default Recruitment
