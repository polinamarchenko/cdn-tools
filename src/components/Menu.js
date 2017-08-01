import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem><Link to="/about">About</Link></NavItem>
            <NavItem><Link to="/login">Login</Link></NavItem>
            <NavItem><Link to="/signup">Sign up</Link></NavItem>
            {/* <NavItem eventKey={2} href="/login">Login</NavItem>
            <NavItem eventKey={2} href="/signup">Sign up</NavItem> */}
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/new">Add a tool</Link></NavItem>
            {/* <NavItem eventKey={1} href="/new">Add a tool</NavItem> */}
          </Nav>
        </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default Menu;
