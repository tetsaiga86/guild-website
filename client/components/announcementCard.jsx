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
import moment from 'moment'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}
const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
}
const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
// connectDragSource: PropTypes.func.isRequired,
    // connectDropTarget: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    // isDragging: PropTypes.bool.isRequired,
    // id: PropTypes.any.isRequired,
    // text: PropTypes.string.isRequired,
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onMove(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
}

class AnnouncementCard extends React.Component {
  onChange(e, field){
    this.props.onEdit(this.props.index, field, e.target.value)
  }

  onToggle(e, field){
    this.props.onEdit(this.props.index, field, !e.target.checked)
  }

  deleteAnnouncement(){
    this.props.onDelete(this.props.id)
  }

  render () {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;
    const announcement = this.props.announcement
    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity}}>
        <ListGroupItem className='list-group-item'>
          <Form horizontal>
            <FormGroup>
              <Col sm={2}>
                Title
              </Col>
              <Col sm={10}>
                <FormControl type="text" value={announcement.title} onChange={(e) => this.onChange(e, 'title')} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl componentClass="textarea" value={announcement.body} onChange={(e) => this.onChange(e, 'body')}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox checked={!announcement.retired} onChange={(e) => this.onToggle(e, 'retired')}>Show</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle="danger" onClick={() => this.deleteAnnouncement()}>
                  Delete
                </Button>
              </Col>
            </FormGroup>

          </Form>

          <h7>{moment(announcement.updated_at).format('LLLL')}</h7>
        </ListGroupItem>
      </div>
    ))
  }
}

AnnouncementCard.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  announcement: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

const dropAnnouncementCard = DropTarget(ItemTypes.ANNOUNCEMENT_CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(AnnouncementCard)

const dragDropAnnouncementCard = DragSource(ItemTypes.ANNOUNCEMENT_CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(dropAnnouncementCard)

export default dragDropAnnouncementCard
