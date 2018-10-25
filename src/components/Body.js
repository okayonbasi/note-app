import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import WNote from './WNote';
import NoteList from './NoteList';

class Body extends Component {
    render() {
        return (
            <Grid>
  <Row className="show-grid">
    <Col xs={6} md={2}>
      <NoteList/>
    </Col>
    <Col xs={6} md={10}>
      <WNote/>
    </Col>
  </Row>

  
</Grid>
        );
    }
}

export default Body;