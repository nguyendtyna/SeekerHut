import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header.jsx';
import AppliedList from './components/AppliedList.jsx';
import InterviewsList from './components/InterviewsList.jsx';
import OffersList from './components/OffersList.jsx';
import RejectedList from './components/RejectedList.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Header /><br></br>
        <Container>
          <Row>
            <Col sm="auto">
              <AppliedList />
            </Col>
            <Col sm="auto">
              <InterviewsList />
            </Col>
            <Col sm="auto">
              <OffersList />
            </Col>
            <Col sm="auto">
              <RejectedList />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}