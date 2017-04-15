import React from 'react'
import {
  Button,
  Collapse,
  Well
} from 'react-bootstrap'

const { bool, func, string } = React.PropTypes;

class Collapsible extends React.Component {
  render () {
    return (
      <div>
        <Button block onClick={this.props.onToggle}>{this.props.title}</Button>
          <Collapse in={this.props.in}>
            <div>
              <Well>
                {this.props.children}
              </Well>
            </div>
          </Collapse>
      </div>
    )
  }
}

Collapsible.propTypes = {
  title: string.isRequired,
  in: bool.isRequired,
  onToggle: func.isRequired
};

export default Collapsible
