import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import WNote from './WNote';
import NoteList from './NoteList';

class Body extends Component {
    render() {
        return (
            <Grid>
  <Row className="show-grid">
    <Col xs={6} md={4}>
      <NoteList/>
    </Col>
    <Col xs={6} md={8}>
      <WNote/>
    </Col>
  </Row>

  
</Grid>
        );
    }
}

export default Body;