import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Comment from './comments/Comment';
import { CommentInterface } from '../../app/store/posts/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';

type TParams = { id: string };

export default function Post({ match }: RouteComponentProps<TParams>) {
  const postId = match.params.id;
  const post = useSelector((state: RootState) => state.post.posts.find((post) => post.id === postId));

  if (!post)
    return (
      <div>
        Post not found:
        <Button as={Link} to="/posts">
          Back to posts
        </Button>
      </div>
    );
  const { content, comments, title, postedBy, postedOn, tags, imageURL, lead, id } = post;
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mt-4">{title}</h1>
            <Button as={Link} to={`/posts/edit/${id}`}>
              EDIT
            </Button>
          </div>
          <p className="lead">
            by
            <a href="/#"> {postedBy}</a>
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-top tag-container">
            <p>{postedOn}</p>
            <p>
              {tags.map((tag, index) => (
                <Badge key={`${tag}-${index}`} variant="primary">
                  {tag}
                </Badge>
              ))}
            </p>
          </div>
          <hr />
          <img className="img-fluid rounded" src={imageURL} alt="" />
          <hr />
          <p className="lead">{lead}</p>
          <p>{content}</p>
          {comments.map((comment: CommentInterface, index: number) => (
            <Comment key={`comment-${index}`} {...comment} />
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
