import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* Import Components */
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
            <Col sm={3}>
              <AppliedList />
            </Col>
            <Col sm={3}>
              <InterviewsList />
            </Col>
            <Col sm={3}>
              <OffersList />
            </Col>
            <Col sm={3}>
              <RejectedList />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}