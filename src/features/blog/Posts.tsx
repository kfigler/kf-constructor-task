import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostSummary from './PostSummary';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';
import { getFirestoreCollection, dataFromSnapshot } from '../../app/firestore/firestoreService';
import { fetchPosts } from '../../app/store/posts/actions';
import { PostInterface } from '../../app/store/posts/types';
import { asyncActionStart, asyncActionFinish } from '../../app/store/async/actions';
import Loader from '../../app/common/loading/Loader';
import Error from '../../app/common/error/Error';

export default function Posts() {
  const { posts } = useSelector((state: RootState) => state.post);
  const { loading, error } = useSelector((state: RootState) => state.async);
  const dispatch = useDispatch();

  useEffect(() => {
    getFirestoreCollection('posts')
      .then((querySnapshot) => {
        dispatch(asyncActionStart());
        const posts: PostInterface[] = [];
        querySnapshot.forEach(function (doc) {
          posts.push(dataFromSnapshot(doc));
        });
        dispatch(fetchPosts(posts));
        dispatch(asyncActionFinish(null));
      })
      .catch((err) => dispatch(asyncActionFinish(err.message)));
  }, [dispatch]);

  if (loading || (!error && posts.length === 0)) return <Loader />;
  if (error) return <Error error={error} redirectTo="/" />;

  return (
    <Container>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => <PostSummary key={`post-preview-${post.id}`} post={post} fullPostLink />)}
        </Col>
      </Row>
    </Container>
  );
}
