import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AppStatistics() {

  const pieData = {
    labels: ['On Site', 'Rejected', 'No Response'],
    datasets: [{
      data: [1, 2, 3],
      backgroundColor: ['#78c975', '#cf4a4a', '#bababa'],
      hoverBackgroundColor: ['#78c975', '#cf4a4a', '#bababa']
    }]
  };

  return (
    <Container className="stats-container">
      <Row>
        <Col sm={3} className="stats-text-container">
          <p className="stats-text-title">Current Application Stats</p>
          {/* Pie Chart */}
        </Col>
        <Col sm="auto">
          <p className="stats-text">You applied to {1} job(s) on a daily average.</p>
          <p className="stats-text">You applied to {3} job(s) on a weekly average.</p>
          <p className="stats-text">You applied to {7} job(s) this month.</p>
          <p className="stats-text">You applied to {7} job(s) in total.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AppStatistics;