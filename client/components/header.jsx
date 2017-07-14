import React from 'react'
import page from 'page'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

class Header extends React.Component {
  changeLocation(url){
    page(url)
  }
  render () {
    const loginTitle = ENV.membership_level > 2 ? 'Login' : `Member level ${ENV.membership_level}`
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
              <NavItem onClick={() => {
                this.changeLocation("/spa/about")
                }}>
                About
              </NavItem>
              <NavItem onClick={() => {
                this.changeLocation("/spa/achievements")
                }}>
                Achievements
              </NavItem>
              <NavItem onClick={() => {
                this.changeLocation("/spa/members")
                }}>
                Members
              </NavItem>
              <NavItem onClick={() => {
                this.changeLocation("/spa/recruit_application")
                }}>
                Recruitment
              </NavItem>
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
