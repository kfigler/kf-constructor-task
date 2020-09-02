import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

interface ErrorProps {
  error: string;
  redirectTo?: string;
}

export default function Error({ error, redirectTo }: ErrorProps) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="fullheight-container d-flex align-items-center justify-content-center">
            <span>{error}</span>
            {redirectTo ? (
              <Button as={Link} to={redirectTo}>
                Back
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
