import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="d-flex justify-content-center align-items-center fullheight-container">
            <Spinner animation="border" variant="primary"></Spinner>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
