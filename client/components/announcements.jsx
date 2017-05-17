import React from 'react'

// var propTypes = React.propTypes;

class Announcements extends React.Component {
  componentWillMount () {
    this.setState({items: []})
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({items: ['announcement1', 'announcement2', 'announcement3']})
    }, 5000);
  }

  renderAnnouncements() {
    var announcements = [];
    this.state.items.forEach(item => {
      announcements.push(<li key={item}>{item}</li>)
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
