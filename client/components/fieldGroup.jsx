import React from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

class FieldGroup extends React.Component{
  render(){
    let newProps = {...this.props}
    delete newProps.help
    delete newProps.validationState

    return(
      <FormGroup key={newProps.id} controlId={newProps.id} validationState={this.props.validationState}>
        <ControlLabel>{newProps.label}</ControlLabel>
        <FormControl {...newProps} />
        <FormControl.Feedback />
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FieldGroup
