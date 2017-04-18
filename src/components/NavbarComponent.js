'use strict';

import React from 'react';
import {Nav, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

require('styles//Navbar.css');

class NavbarComponent extends React.Component {
  render() {
    return (
      <Nav bsStyle="pills" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">React App</NavItem>
        <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
      </Nav>
    );
  }
}

NavbarComponent.displayName = 'NavbarComponent';

// Uncomment properties you need
// NavbarComponent.propTypes = {};
// NavbarComponent.defaultProps = {};

export default NavbarComponent;
