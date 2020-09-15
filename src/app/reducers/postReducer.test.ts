import reducer from './postReducer';
import { PostState, UPDATE_POST } from '../store/posts/types';

describe('posts reducer', () => {
  const initialState: PostState = {
    posts: [
      {
        id: '1',
        title: '',
        postedBy: '',
        postedOn: new Date(),
        tags: ['', ''],
        imageURL: '',
        lead: '',
        content: '',
        userId: '',
      },
      {
        id: '2',
        title: '',
        postedBy: '',
        postedOn: new Date(),
        tags: ['', ''],
        imageURL: '',
        lead: '',
        content: '',
        userId: '',
      },
    ],
    comments: [],
  };

  const nextState = reducer(initialState, {
    type: UPDATE_POST,
    payload: {
      id: '1',
      title: '',
      postedBy: '',
      postedOn: new Date(),
      tags: ['', ''],
      imageURL: '',
      lead: '',
      content: '',
      userId: '',
    },
  });

  it('should update state, but unchanged parts should remain the same', () => {
    expect(initialState).not.toBe(nextState);
    expect(initialState.posts[0]).not.toBe(nextState.posts[0]);
    expect(initialState.posts[1]).toBe(nextState.posts[1]);
  });
});
