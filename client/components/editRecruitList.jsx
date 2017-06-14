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

const allRecruitsUrl = '/admin/wow_specs.json'
const saveAllRecruitsUrl = '/admin/wow_specs_many'

class EditRecruitList extends React.Component {
  constructor(props){
    super(props)
    this.state = { showModal : false}
    this.moveRecruit = this.moveRecruit.bind(this)
    this.saveAllRecruits = this.saveAllRecruits.bind(this)
    this.addRecruit = this.addRecruit.bind(this)
    this.onRequestClose = this.onRequestClose.bind(this)
    this.editSpecByClass = this.editSpecByClass.bind(this)
  }

  componentWillMount () {
    this.setState({
      activeRecruits: [],
      wowClasses: [],
      change: false
    })
    $.getJSON(allRecruitsUrl, (recruits) => {
      this.setState({
        activeRecruits : recruits.by_spec,
        wowClasses : recruits.by_class
      })
    })
  }

  editSpecByClass(classIndex, specIndex, field, newValue){
    var newWowClasses = [...this.state.wowClasses]
    newWowClasses[classIndex].wow_specs[specIndex][field] = newValue
    this.setState({ wowClasses : newWowClasses })
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

  renderActiveRecruits(){
    var activeRecruitsList = []
    this.state.activeRecruits.forEach(recruit => {
      activeRecruitsList.push(
        <RecruitCard recruit={recruit} id={recruit.id} index={activeRecruitsList.length} key={recruit.id} onMove={this.moveRecruit} />
      )
    })
    console.log('arl', activeRecruitsList);
    return activeRecruitsList
  }

  saveAllRecruits(){
    var newWowSpecs = []
    this.state.wowClasses.forEach(wowClass => {
      newWowSpecs = newWowSpecs.concat(wowClass.wow_specs)
    })

    this.state.activeRecruits.forEach((recruit) => {
      newWowSpecs.find((spec) => {
        return spec.id == recruit.id
      }).order=recruit.order
    })
    $.post(saveAllRecruitsUrl, {
      wow_specs: newWowSpecs
    }, (recruits) =>{
      this.setState({
        activeRecruits : recruits.by_spec,
        wowClasses : recruits.by_class,
        showModal : false,
        change : false
      })
    })
  }

  addRecruit(){
    this.setState({ showModal : true })
  }

  onRequestClose () {
    $.getJSON(allRecruitsUrl, (recruits) => {
      this.setState({
        activeRecruits : recruits.by_spec,
        wowClasses : recruits.by_class,
        showModal : false
      })
    })
  }

  render () {
    return(
      <div className="edit-recruit-list">
        <RecruitModal show={this.state.showModal} onRequestClose={this.onRequestClose} recruitList={this.state.wowClasses} save={this.saveAllRecruits} onEdit={this.editSpecByClass}/>
        <h1>Recruit List</h1>
        <ListGroup>
          {this.renderActiveRecruits()}
        </ListGroup>
        <Button bsStyle="success" disabled={!this.state.change} onClick={this.saveAllRecruits}>Save</Button>
        <Button bsStyle="primary" onClick={this.addRecruit} >Edit List</Button>
      </div>
    )
  }
}

export default EditRecruitList
