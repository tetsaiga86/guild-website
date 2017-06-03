import React from 'react'
import $ from 'jquery'
import moment from 'moment'

const announcementsUrl = '/api/announcements';
class Announcements extends React.Component {
  componentWillMount () {
    this.setState({items: []})
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

  render () {
    if (this.state.items.length === 0) {
      return <h2>No Announcements</h2>;
    }

    return (
      <div>
        <h2>{this.state.items.length} announcements</h2>
        {this.renderAnnouncements()}
      </div>
    );
  }
}

export default Announcements
