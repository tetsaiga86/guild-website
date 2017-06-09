import React from 'react'
import { DragDropContext } from 'react-dnd'
import update from 'react/lib/update'
import HTML5Backend from 'react-dnd-html5-backend'
import $ from 'jquery'
import {
  ListGroup,
  Button
} from 'react-bootstrap'
import RecruitCard from './recruitCard'
import RecruitModal from './recruitModal'

// const allRecruitsUrl = '/api/all_recruitments'
const activeRecruitsUrl = '/api/recruitment'
const wowClassesUrl = '/api/wow_classes'
const saveAllRecruitsUrl = '/admin/wow_specs_many'

class EditRecruitList extends React.Component {
  constructor(props){
    super(props)
    this.state = { showModal : false}
    this.moveRecruit = this.moveRecruit.bind(this)
    // this.editRecruit = this.editRecruit.bind(this)
    this.saveAllRecruits = this.saveAllRecruits.bind(this)
    this.deleteRecruit = this.deleteRecruit.bind(this)
    this.addRecruit = this.addRecruit.bind(this)
    this.onRequestClose = this.onRequestClose.bind(this)
  }

  componentWillMount () {
    this.setState({
      // recruits: [],
      activeRecruits: [],
      wowClasses: [],
      change: false
    })
    // $.getJSON(allRecruitsUrl, (recruits) => {
      // this.setState({ recruits : recruits })
    // })
    $.getJSON(activeRecruitsUrl, (activeRecruits) => {
      this.setState({ activeRecruits : activeRecruits })
    })
    $.getJSON(wowClassesUrl, (wowClasses) => {
      this.setState({ wowClasses : wowClasses })
    })
  }

  moveRecruit(dragIndex, hoverIndex){
    const { activeRecruits } = this.state
    const dragged = activeRecruits[dragIndex]

    const reordered = update(this.state, {
      activeRecruits: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragged]
        ]
      }
    });

    reordered.activeRecruits.forEach((activeRecruit, index) => {
      activeRecruit.order = index + 1
    })

    this.setState(reordered)
    if (!this.state.change) this.setState({ change : true })
  }

  deleteRecruit(id){
    // var deletUrl = `/admin/announcements/${id}`
    // $.ajax({
    //   url: deletUrl,
    //   method: "DELETE",
    //   success: (data) => {
    //     this.setState({announcements: data})
    //   }
    // })
  }

  renderActiveRecruits(){
    var activeRecruitsList = []
    this.state.activeRecruits.forEach(recruit => {
      activeRecruitsList.push(
        <RecruitCard recruit={recruit} id={recruit.id} index={recruit.order-1} key={recruit.id} onMove={this.moveRecruit} onDelete={this.deleteRecruit}/>
      )
    })
  }

  saveAllRecruits(newWowSpecs){
    $.post(saveAllRecruitsUrl, {
      wow_specs: newWowSpecs,
      bySpec: true
    }, (data) =>{
      this.setState({ activeRecruits : data })
    })
  }

  addRecruit(){
    this.setState({ showModal : true })
  }

  onRequestClose () {
    this.setState({ showModal : false });
  }

  render () {
    return(
      <div className="edit-recruit-list">
        <RecruitModal show={this.state.showModal} onRequestClose={this.onRequestClose} recruitList={this.state.wowClasses} save={this.saveAllRecruits} />
        <h1>Recruit List</h1>
        <ListGroup>
          {this.renderActiveRecruits()}
        </ListGroup>
        <Button bsStyle="primary" onClick={this.addRecruit} >Edit List</Button>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(EditRecruitList)
