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
    const loginTitle = ENV.membership_level > 99 ? 'Login' : `Member level ${ENV.membership_level}`
    return (
      <div className="menu">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">F O O L S A V G E</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={2} href="#">Forum</NavItem>
              <NavItem eventKey={3} href="#">About</NavItem>
              <NavItem eventKey={4} href="/spa/achievements">Achievements</NavItem>
              <NavItem eventKey={5} href="/spa/members">Members</NavItem>
              <NavItem eventKey={6} href="#">Recruitment</NavItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={1} title={loginTitle} id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Action</MenuItem>
                <MenuItem eventKey={1.2}>Another action</MenuItem>
                <MenuItem eventKey={1.3} href="/spa/admin">Admin</MenuItem>
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
