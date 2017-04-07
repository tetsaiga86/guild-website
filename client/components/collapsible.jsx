import React from 'react'
import {
  Button,
  Collapse,
  Well
} from 'react-bootstrap'

const { bool, string, node } = React.PropTypes;

class Collapsible extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: this.props.defaultOpen };
    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
  }

  render () {
    return (
      <div>
        <Button block onClick={this.toggle}>{this.props.title}</Button>
          <Collapse in={this.state.isOpen}>
            <div>
              <Well>
                {this.props.body}
              </Well>
            </div>
          </Collapse>
      </div>
    )
  }
}

Collapsible.propTypes = {
  title: string.isRequired,
  defaultOpen: bool,
  body: node
};

Collapsible.defaultProps = {
  defaultOpen: false,
  body: null
};

export default Collapsible
