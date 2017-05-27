import React from 'react'
import unixTime from '../util/unix_time'
import {
  Table,
  Popover,
  OverlayTrigger,

} from 'react-bootstrap'

const iconUrl = 'http://media.blizzard.com/wow/icons/56/';
const achievementUrl = 'http://www.wowhead.com/achievement=';
class Achievement extends React.Component{
  renderCriteria(criteriaArr){
    if(!criteriaArr[0].description.length) return;
    var criteriaTitles = [];
    for (var i = 0; i < criteriaArr.length; i++) {
      criteriaTitles.push(
        <li>{criteriaArr[i].description}</li>
      )
    }
    return <ul>{criteriaTitles}</ul>;
  }
  render(){
    var criteria;
    var achievement = this.props.achievement;
    var details = achievement.details;
    // var criteria = details.criteria;

    try {
      criteria = details.criteria;
    } catch(e) { debugger }
    var popover = (
      <Popover className='popover' id={achievement.id}>
        <h5>{details.description}</h5>
        <h5>{details.reward}</h5>
        {this.renderCriteria(criteria)}
      </Popover>
    )
    return(
      <tr>
        <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={popover}>
          <td className="achievement-table-cell" onClick={()=> window.open(`${achievementUrl}${achievement.id}/${details.title}`)}>
            <img src={`${iconUrl}${details.icon}.jpg`} className="achievement-icon" />
            {details.title}
          </td>
        </OverlayTrigger>

        <td className="achievement-table-cell">{unixTime(this.props.achievement.timestamp)}</td>
      </tr>
    )
  }
}

export default Achievement
