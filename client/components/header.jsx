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
}

const playerUrl = 'https://render-us.worldofwarcraft.com/character/'
class Header extends React.Component {
  changeLocation(url){
    page(url)
  }

  renderForum(){
    if (ENV.membership_level <= 99){
      return(
        <NavItem onClick={() => {
            this.changeLocation("/forum")
          }}>
          Forum
        </NavItem>
      )
    }
  }

  renderLogout(){
    if(!isLoggedIn()) return;

    return <MenuItem eventKey={1.1} href="/logout">Logout</MenuItem>
  }

  renderAdminMenuItems(){
    if(!isAdmin()) return;

    return [
      <MenuItem divider />,
      <MenuItem eventKey={1.2} href="/spa/admin">Admin</MenuItem>
    ]
  }

  renderLogin() {
    if(isLoggedIn()) return;
    return (
      <MenuItem eventKey={1.1} href="/users/auth/bnet">Login</MenuItem>
    )
  }

  renderTitle() {
    if(!isLoggedIn()) {
      return 'Login With Bnet';
    } else {
      return <span className="thumbnail-span">
        <img className="login-thumbnail" src={playerUrl + ENV.current_user_thumbnail} /> {ENV.current_user_name}
      </span>;
    }
  }



  render () {
    return (
      <div className="menu">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">{ENV.guild_name}</a>
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
              {this.renderForum()}
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={1} title={this.renderTitle()} id="basic-nav-dropdown">
                {this.renderLogin()}
                {this.renderLogout()}
                {this.renderAdminMenuItems()}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
