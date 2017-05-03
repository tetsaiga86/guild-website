import React from 'react'
import Armory from './armory'
import {
  Modal,
  Button,

} from 'react-bootstrap'

class CharacterModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = { initialized: false, data: null };
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.show && !this.props.show) {
      if (this.state.isInitialized) {
        return;
      }
      this.setState({initialized: true})
      this.setState({ data : this.props.character });
    }
  }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.onRequestClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.character.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Armory data={this.state.data} character={this.props.character}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onRequestClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CharacterModal
