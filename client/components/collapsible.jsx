import React from 'react'
import {
  Button,
  Collapse,
  Well,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap'

const { bool, func, string } = React.PropTypes;

class Collapsible extends React.Component {
  popover(string){
    // console.log('popover', string)
    return(
      <Popover id={string}>
        {string}
      </Popover>
    )
  }

  renderIcon(){
    if(this.props.iconUrl){
      return(
        <img className="collapsible-icon" src={this.props.iconUrl} />
      )
    }
  }

  render(){
    if(this.props.popoverInfo){
      return(
        <div>
          <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={this.popover(this.props.popoverInfo)}>
            <Button block onClick={this.props.onToggle} className="collapsible-button">
              {this.renderIcon()}
              {this.props.title}
            </Button>
          </OverlayTrigger>
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
    return (
      <div>
        <Button block onClick={this.props.onToggle}>
          {this.renderIcon()}
          {this.props.title}
        </Button>
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
