import React, { Component } from 'react';
import {Navlink, Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {Image, Button, Navbar, NavItem, Nav} from 'react-bootstrap';
import '../assets/style/header.sass';

class header extends Component {
    render() {
        return (
            <div>
            <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="" className="notes">Notes</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Navbar.Text pullRight><Button className="NewNote">Create</Button></Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>
        );
    }
}

export default header;