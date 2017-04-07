import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <div className="menu">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">F O O L S A V G E</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Logo and link home</NavItem>
              <NavItem eventKey={2} href="#">Forum link</NavItem>
              <NavItem eventKey={3} href="#">about and contact</NavItem>
              <NavItem eventKey={4} href="#">achievements</NavItem>
              <NavItem eventKey={5} href="#">members</NavItem>
              <NavItem eventKey={6} href="#">recruitment</NavItem>

            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={1} title="login" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Action</MenuItem>
                <MenuItem eventKey={1.2}>Another action</MenuItem>
                <MenuItem eventKey={1.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
