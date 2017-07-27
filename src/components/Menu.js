import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/amount">About</NavItem>
            <NavItem eventKey={2} href="/login">Login</NavItem>
            <NavItem eventKey={2} href="/signup">Sign up</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Add a tool</NavItem>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default Menu;
