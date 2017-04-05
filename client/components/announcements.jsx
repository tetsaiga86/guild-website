import React from 'react'

// var propTypes = React.propTypes;

class Announcements extends React.Component {
  // static propTypes = {
  //   maxShown: propTypes.number
  // };
  //
  // static defaultProps = {
  //   maxShown: 1000
  // };

  componentWillMount () {
    this.setState({items: []})
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({items: ['announcement1', 'announcement2', 'announcement3']})
    }, 5000);
    // $.get('endpoint', function (results) {
    //   this.setState({items: results})
    // });
  }

  renderAnnouncements() {
    var announcements = [];
    this.state.items.forEach(item => {
      // if (announcements.length >= this.props.maxShown) {
      //   return;
      // }
      announcements.push(<li key={item}>{item}</li>)
    });
    return <ul>{announcements}</ul>;
  }

  render () {
    if (this.state.items.length === 0) {
      return <h2>No announcements</h2>;
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
