import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Container className="header-container">
      <Row>
        <Col sm={10}><p className="header-text">mvp-project</p></Col>
        <Col sm={2}><p className="account-text">account-name</p></Col>
      </Row>
    </Container>
  );
}

export default Header;