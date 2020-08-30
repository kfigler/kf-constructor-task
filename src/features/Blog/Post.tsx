import React from 'react';
import { posts } from '../../app/api/examplePosts';
import { Link, RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PostPreview from './PostPreview';
import Comment from './comments/Comment';

export interface PostProps {
  title: string;
  postedBy: string;
  // TODO Consider converting this to javascript date type
  postedOn: string;
  imageURL: string;
  lead: string;
  id: string | number | undefined;
}

// TODO Consider if this should be actually here or in some common folder
type TParams = { id: string };

export default function Post({ match }: RouteComponentProps<TParams>) {
  // TODO Set up redux and get state from there
  const post = posts.find((post) => post.id === match.params.id);
  if (!post)
    return (
      <div>
        Post not found:
        <Button as={Link} to="/posts">
          Back to posts
        </Button>
      </div>
    );
  const { content, comments, ...rest } = post;
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <PostPreview {...rest} />
          <p>{content}</p>
          {comments.map((comment, index) => (
            <Comment key={`comment-${index}`} {...comment} />
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
