import React from 'react'
import { DragDropContext } from 'react-dnd'
import update from 'react/lib/update'
import HTML5Backend from 'react-dnd-html5-backend'
import $ from 'jquery'
import {
  ListGroup,
  Button
} from 'react-bootstrap'
import AnnouncementCard from './announcementCard'

const announcementsUrl = '/api/all_announcements'
class EditAnnouncemnts extends React.Component {
  constructor(props){
    super(props)
    this.moveAnnouncement = this.moveAnnouncement.bind(this)
    this.editAnnouncement = this.editAnnouncement.bind(this)
    this.saveAllAnnouncements = this.saveAllAnnouncements.bind(this)
  }

  componentWillMount () {
    this.setState({
      announcements: [],
      change: false
    })
    $.getJSON(announcementsUrl, (announcements) => {
      this.setState({announcements: announcements})
    })
  }

  moveAnnouncement(dragIndex, hoverIndex){
    const { announcements } = this.state
    const dragged = announcements[dragIndex]

    this.setState(update(this.state, {
      announcements: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragged]
        ]
      }
    }))
    if (!this.state.change) this.setState({ change : true})
  }
  editAnnouncement(index, field, newValue){
    var newAnnouncements = [...this.state.announcements]
    newAnnouncements[index][field] = newValue
    this.setState({ announcements : newAnnouncements})
    if (!this.state.change) this.setState({ change : true})
  }

  saveAllAnnouncements(){
    var newAnnouncements = [...this.state.announcements]

    for (var i = 0; i < newAnnouncements.length; i++) {
      newAnnouncements[i]['order'] = i + 1
    }
    console.log(newAnnouncements);
    // $.post()
  }

  renderAnnouncements() {
    var announcements = [];
    this.state.announcements.forEach(announcement => {
      announcements.push(
        <AnnouncementCard announcement={announcement} id={announcement.id} index={announcement.order-1} key={announcement.id} onMove={this.moveAnnouncement} onEdit={this.editAnnouncement}/>
      )
    });
    return announcements;
  }

  render () {
    return (
      <div className="edit-announcements">
        <h1>Announcements</h1>
        <ListGroup>
          {this.renderAnnouncements()}
        </ListGroup>
        <Button bsStyle="success" disabled={!this.state.change} onClick={this.saveAllAnnouncements} >Save</Button>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(EditAnnouncemnts)
