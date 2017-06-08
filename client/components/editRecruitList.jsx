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

class EditRecruitList extends React.Component {
  render () {
    return(
      <div className="edit-recruit-list">
        <h1>Recruit List</h1>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(EditRecruitList)
