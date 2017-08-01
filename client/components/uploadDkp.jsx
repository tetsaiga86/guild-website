import React from 'react'
import FieldGroup from './fieldGroup'
import {
  Button
} from 'react-bootstrap'
import $ from 'jquery'

const uploadUrl = '/admin/update_dkp'
const initialState = {
  value: "",
  busy: false
}
class UploadDkp extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState

    this.onEdit = this.onEdit.bind(this)
    this.submit = this.submit.bind(this)
  }

  onEdit(e){
    this.setState({ value : e.target.value })
  }

  renderBusy() {
    if (this.state.busy) {
      return <div>WORKING...</div>
    }
  }

  submit(){
    let data = {
      "xml_string": this.state.value
    }
    this.setState({busy: true})
    $.post(uploadUrl, data, () => {
      alert('Data uploaded!')
      this.setState(initialState)
    })
  }

  render(){
    return(
      <div>
        <FieldGroup
          componentClass="textarea"
          id="xmlString"
          label="Paste XML from QDKP export here."
          placeholder=""
          value={this.state.value}
          onChange={this.onEdit}
        />
      {this.renderBusy()}
      <Button bsStyle="success" onClick={this.submit} disabled={!this.state.value || this.state.busy}>Upload</Button>
      </div>
    )
  }
}

export default UploadDkp
