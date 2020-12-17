import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import AccountCircle from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <Container className="header-container">
      <Row>
        <Col sm={10} className="header-text-container"><p className="header-text">OKGO</p></Col>
        <Col sm={2}>
          <p className="account-text">Existing User</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;