import React from 'react'
import $ from 'jquery'

const recruitmentUrl = '/api/recruitment'
class Recruitment extends React.Component {
  constructor(props){
    super(props)
    this.state = { wowClasses : []}
  }

  componentDidMount () {
    $.getJSON(recruitmentUrl, (wowClasses) => {
      this.setState({wowClasses: wowClasses})
    })
  }

  renderRecruitListing() {
    var wowClassesArr = [];
    this.state.wowClasses.forEach(wowClass => {
      wowClassesArr.push(
        <li key={wowClass.id}>
          <img src={wowClass.img_url}></img>
          {wowClass.name} {wowClass.wow_class.name}
        </li>
      );
    });
    if(wowClassesArr.length) return wowClassesArr;
    else return (<h3>No Recruitment at this time</h3>)
  }
  render () {
    return (
      <div className="recruitment-list">
        <h2>Recruitment</h2>
        <ul>
          {this.renderRecruitListing()}
        </ul>
      </div>
    )
  }
}

export default Recruitment
