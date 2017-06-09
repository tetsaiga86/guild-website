import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from '../util/item_types'
import {
  ListGroupItem,
  Form,
  FormGroup,
  Col,
  FormControl,
  Checkbox,
  Button,

} from 'react-bootstrap'

class RecruitCard extends React.Component {

  render () {
    const recruit = this.props.recruit
    return (
      <div>
        <img src={recruit.img_url}></img>
        {recruit.name} {recruit.wow_class.name}
      </div>
    )
  }
}

export default RecruitCard
