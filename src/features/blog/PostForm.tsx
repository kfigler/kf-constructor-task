import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../app/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost, fetchPosts } from '../../app/store/posts/actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Formik, Form } from 'formik';
import CustomInput from '../../app/common/form/CustomInput';
import CustomSelect from '../../app/common/form/CustomSelect';
import CustomTextArea from '../../app/common/form/CustomTextArea';
import * as Yup from 'yup';
import { updateDocInFirestore, getDocFromFirestore, dataFromSnapshot } from '../../app/firestore/firestoreService';
import { PostInterface } from '../../app/store/posts/types';
import { asyncActionStart, asyncActionFinish } from '../../app/store/async/actions';
import Loader from '../../app/common/loading/Loader';
import Error from '../../app/common/error/Error';

const tags: string[] = ['mod', 'guide', 'story', 'outfit', 'lot', 'challenges'];

type TParams = { id: string };

export default function PostForm({ match, history }: RouteComponentProps<TParams>) {
  const postId = match.params.id;
  const post = useSelector((state: RootState) => state.post.posts.find((post) => post.id === match.params.id));
  const { loading, error } = useSelector((state: RootState) => state.async);
  const dispatch = useDispatch();

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

  const initialValues: PostInterface = post ?? {
    id: '',
    title: '',
    postedBy: '',
    postedOn: new Date(Date.now()),
    tags: [],
    imageURL: '',
    lead: '',
    content: '',
    userId: '',
  };

  const PostSchema = Yup.object().shape({
    lead: Yup.string().required('Lead is required'),
    content: Yup.string().required('Content is required'),
  });

  if (loading || (!post && !error)) return <Loader />;
  if (!post && error) return <Error error={error} redirectTo="/posts" />;
  if (!post) return null;

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Edit Post</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={PostSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const updatedPost = { ...initialValues, ...values };
                await updateDocInFirestore('posts', updatedPost);
                dispatch(updatePost(updatedPost));
                history.push(`/posts/${initialValues.id}`);
              } catch (error) {
                // NOTE TODO Better error handling should be implemented
                console.log(error.code);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <CustomInput name="lead" label="Lead" placeholder="Type lead here..." />
                <CustomTextArea name="content" label="Content" placeholder="Type content here..." rows={5} />
                <CustomSelect name="tags" label="Tags" options={tags} multiple />
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Loading...' : 'Submit'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
