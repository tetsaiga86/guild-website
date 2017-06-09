import React from 'react'
import {
  Button,
  Collapse,
  Well,
  Checkbox,

} from 'react-bootstrap'

class WowClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.renderWowSpecs = this.renderWowSpecs.bind(this)
  }

  renderWowSpecs(wowClass){
    var wowSpecArr = []
    wowClass.wow_specs.forEach(wowSpec => {
      wowSpecArr.push(
        <Checkbox key={wowSpec.id} checked={wowSpec.active}>{wowSpec.name}</Checkbox>
      )
    })
    return wowSpecArr
  }

  render(){
    let wowClass = this.props.wowClassObj
    return(
      <div key={wowClass.id}>
        <Button className='wow-class-button' onClick={ () => this.setState({ open : !this.state.open })}>
          {wowClass.name}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              {this.renderWowSpecs(wowClass)}
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}
export default WowClass
