import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../app/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../../app/store/posts/actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Formik, Form } from 'formik';
import CustomInput from '../../app/common/form/CustomInput';
import CustomSelect from '../../app/common/form/CustomSelect';
import CustomTextArea from '../../app/common/form/CustomTextArea';
import * as Yup from 'yup';

const tags: string[] = ['mod', 'guide', 'story', 'outfit', 'lot', 'challenges'];

// TODO This is used in two places. Consider outsourcing it to some common place
type TParams = { id: string };

export default function PostForm({ match, history }: RouteComponentProps<TParams>) {
  const post = useSelector((state: RootState) => state.post.posts.find((post) => (post.id = match.params.id)));
  const dispatch = useDispatch();

  const initialValues = post ?? {
    id: '',
    title: '',
    postedBy: '',
    postedOn: '',
    tags: [],
    imageURL: '',
    lead: '',
    content: '',
    comments: [],
  };

  const PostSchema = Yup.object().shape({
    lead: Yup.string().required('Lead is required'),
    content: Yup.string().required('Content is required'),
  });

  function handleSubmit(values: { content: string; tags: string[] }) {
    const updatedPost = { ...initialValues, ...values };
    dispatch(updatePost(updatedPost));
    history.push(`/posts/${initialValues.id}`);
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Edit Post</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={PostSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <CustomInput name="lead" label="Lead" placeholder="Type lead here..." />
              <CustomTextArea name="content" label="Content" placeholder="Type content here..." rows={5} />
              <CustomSelect name="tags" label="Tags" options={tags} multiple />
              <Button type="submit">SUBMIT</Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
