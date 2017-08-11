import React from 'react'
import $ from 'jquery'
import moment from 'moment'

const announcementsUrl = '/api/announcements';
class Announcements extends React.Component {
  constructor(props){
    super(props)
    this.state = { items : [] }
  }

  componentDidMount () {
    $.getJSON(announcementsUrl, (announcements) => {
      this.setState({items: announcements})
    })
  }

  renderAnnouncements() {
    var announcements = [];
    this.state.items.forEach(item => {
      announcements.push(
        <li key={item.title}>
          <h3>{item.title}</h3>
          <h4>{item.body}</h4>
          <h7>{moment(item.updated_at).format('LLLL')}</h7>
        </li>
      )
    });
    return <ul>{announcements}</ul>;
  }

  renderTitle(length){
    if (!length) {
      return <h2>No Announcements</h2>
    }else if (length === 1) {
      return <h2>1 Announcement</h2>
    }else{
      return <h2>{length} announcements</h2>
    }
  }

  render () {
    return (
      <div>
        {this.renderTitle(this.state.items.length)}
        {this.renderAnnouncements()}
      </div>
    );
  }
}

export default Announcements
