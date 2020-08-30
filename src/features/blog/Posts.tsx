import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostPreview from './PostPreview';
import { posts } from '../../app/api/examplePosts';

export default function Posts() {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          {posts.map((post) => (
            <PostPreview key={`post-preview-${post.id}`} fullPostLink {...post} />
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
