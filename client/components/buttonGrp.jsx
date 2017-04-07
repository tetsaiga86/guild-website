import React from 'react'
import {
  ButtonGroup,
  Button
} from 'react-bootstrap'

class ButtonGrp extends React.Component {
  render () {
    return (
      <ButtonGroup>
        <Button bsStyle="success">Heroic</Button>
        <Button bsStyle="danger">Mythic</Button>
      </ButtonGroup>
    );
  }
}

export default ButtonGrp
