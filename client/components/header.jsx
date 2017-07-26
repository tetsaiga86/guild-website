import React from 'react'
import page from 'page'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

function isAdmin() {
  return ENV.membership_level <= 2;
}

function isLoggedIn() {
  return ENV.membership_level <= 99
  && ENV.membership_level >=3
}

const playerUrl = 'http://render-us.worldofwarcraft.com/character/'
class Header extends React.Component {
  changeLocation(url){
    page(url)
  }

  renderLogout(){
    if(!isLoggedIn()) return;
    if(!isAdmin()) return;

    return (
      <NavDropdown eventKey={1} title={
            <div>
              <img src={playerUrl + ENV.current_user_thumbnail} /> {ENV.current_user_name}
            </div>
        } id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} href="/logout">Logout</MenuItem>
      </NavDropdown>
    )
  }

  renderAdminMenuItems(){
    if(!isAdmin()) return;

    return (
      <NavDropdown eventKey={1} title={
            <div>
              <img src={playerUrl + ENV.current_user_thumbnail} /> {ENV.current_user_name}
            </div>
        } id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} href="/logout">Logout</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={1.2} href="/spa/admin">Admin</MenuItem>
      </NavDropdown>
    )
  }

  renderLogin() {
    if(isLoggedIn()) return;
    if(isAdmin()) return;
    return (
      <NavDropdown eventKey={1} title={"Login With Bnet"} id="basic-nav-dropdown">
        <MenuItem eventKey={1.1} href="/users/auth/bnet">Login</MenuItem>
      </NavDropdown>
    )
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
              {this.renderLogin()}
              {this.renderLogout()}
              {this.renderAdminMenuItems()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
