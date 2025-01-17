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
const saveAnnouncementsUrl = '/admin/announcements_many.json'
const addAnnouncementUrl = '/admin/announcements'

class EditAnnouncemnts extends React.Component {
  constructor(props){
    super(props)
    this.moveAnnouncement = this.moveAnnouncement.bind(this)
    this.editAnnouncement = this.editAnnouncement.bind(this)
    this.saveAllAnnouncements = this.saveAllAnnouncements.bind(this)
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this)
    this.addAnnouncement = this.addAnnouncement.bind(this)
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

    const reordered = update(this.state, {
      announcements: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragged]
        ]
      }
    });

    reordered.announcements.forEach((announcement, index) => {
      announcement.order = index + 1
    })

    this.setState(reordered)
    if (!this.state.change) this.setState({ change : true })
  }

  editAnnouncement(index, field, newValue){
    var newAnnouncements = [...this.state.announcements]
    newAnnouncements[index][field] = newValue
    this.setState({ announcements : newAnnouncements})
    if (!this.state.change) this.setState({ change : true})
  }

  saveAllAnnouncements(cb){
    if (!this.state.announcements.length) {
      return cb();
    }
    
    $.post(saveAnnouncementsUrl, this.state, (data) => {
      this.setState({ announcements : data })
      this.setState({ change : false })
      if (typeof cb === 'function') {
        cb()
      }
    })
  }

  deleteAnnouncement(id){
    var deletUrl = `/admin/announcements/${id}`
    $.ajax({
      url: deletUrl,
      method: "DELETE",
      success: (data) => {
        this.setState({announcements: data})
      }
    })
  }

  addAnnouncement(){
    this.saveAllAnnouncements(() => {
      var emptyAnnouncement = {
        announcement : {
          title : "",
          order : this.state.announcements.length+1,
          body : ""
        }
      }
      // add to db, get new json from db, set new state
      $.post(addAnnouncementUrl, emptyAnnouncement, (data) => {
        this.setState({ announcements: data })
      })
    })

  }

  renderAnnouncements() {
    var announcements = []
    this.state.announcements.forEach(announcement => {
      announcements.push(
        <AnnouncementCard announcement={announcement} id={announcement.id} index={announcement.order-1} key={announcement.id} onMove={this.moveAnnouncement} onDelete={this.deleteAnnouncement} onEdit={this.editAnnouncement}/>
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
        <Button bsStyle="primary" onClick={this.addAnnouncement} >Add New</Button>
      </div>
    )
  }
}

export default EditAnnouncemnts
