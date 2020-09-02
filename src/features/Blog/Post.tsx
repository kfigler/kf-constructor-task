import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostSummary from './PostSummary';
import Comment from './comments/Comment';
import { CommentInterface } from '../../app/store/posts/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';
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

  const { content } = post;

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <PostSummary post={post} />
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
