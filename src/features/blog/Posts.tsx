import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostPreview from './PostPreview';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';

export default function Posts() {
  const { posts } = useSelector((state: RootState) => state.post);

  return (
    <Container>
      <Row>
        <Col lg={8}>{posts && posts.map((post) => <PostPreview key={`post-preview-${post.id}`} post={post} />)}</Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
