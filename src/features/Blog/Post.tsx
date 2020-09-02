import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Comment from './comments/Comment';
import { CommentInterface } from '../../app/store/posts/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';
import { formatISODate } from '../../app/common/utils/formatISODate';
import { getDocFromFirestore, dataFromSnapshot } from '../../app/firestore/firestoreService';
import { fetchPosts } from '../../app/store/posts/actions';
import { asyncActionFinish, asyncActionStart } from '../../app/store/async/actions';
import Loader from '../../app/common/loading/Loader';
import Error from '../../app/common/error/Error';

type TParams = { id: string };

export default function Post({ match }: RouteComponentProps<TParams>) {
  const postId = match.params.id;
  const post = useSelector((state: RootState) => state.post.posts.find((post) => post?.id === postId));
  const { loading, error } = useSelector((state: RootState) => state.async);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // TODO Bring in comments from firebase

  // NOTE This could implemented as a reusable hook to work for more components
  useEffect(() => {
    dispatch(asyncActionStart());
    getDocFromFirestore('posts', postId).then((doc) => {
      if (doc.exists) {
        dispatch(fetchPosts([dataFromSnapshot(doc)]));
        dispatch(asyncActionFinish(null));
      } else {
        dispatch(asyncActionFinish('Post does not exist'));
      }
    });
  }, [postId, dispatch]);

  if (loading || (!post && !error)) return <Loader />;
  if (!post && error) return <Error error={error} redirectTo="/posts" />;
  if (!post) return null;

  const { content, title, postedBy, postedOn, tags, imageURL, lead, id, userId } = post;

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mt-4">{title}</h1>
            {currentUser === userId ? (
              <Button as={Link} to={`/posts/edit/${id}`}>
                EDIT
              </Button>
            ) : null}
          </div>
          <p className="lead">
            by
            <a href="/#"> {postedBy}</a>
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-top tag-container">
            <p>{formatISODate(postedOn)}</p>
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
          {/* {comments &&
            comments.length > 0 &&
            comments.map((comment: CommentInterface, index: number) => (
              <Comment key={`comment-${index}`} {...comment} />
            ))} */}
        </Col>
      </Row>
    </Container>
  );
}
