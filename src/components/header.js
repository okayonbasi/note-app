import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import '../assets/style/header.sass';
import { FaPlus } from 'react-icons/fa';

class header extends Component {
    render() {
        return (
            <div>
            <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <p className="notes">Notes</p>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Navbar.Text pullRight><button className="NewNote"><FaPlus /> Create</button></Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>
        );
    }
}

export default header;