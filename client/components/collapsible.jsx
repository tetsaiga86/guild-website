import React from 'react'
import {
  Button,
  Collapse,
  Well
} from 'react-bootstrap'

const { bool, string } = React.PropTypes;

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
  defaultOpen: bool,
};

Collapsible.defaultProps = {
  defaultOpen: false,
};

export default Collapsible
