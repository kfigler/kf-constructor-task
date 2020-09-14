import { PostActionTypes, PostState, UPDATE_POST, FETCH_POSTS, SUBSCRIBE_TO_POST_COMMENTS } from '../store/posts/types';
import produce from 'immer';

const initialState: PostState = {
  posts: [],
  comments: [],
};

const postReducer = (state = initialState, action: PostActionTypes): PostState =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_POSTS:
        draft.posts = action.payload;
        return;
      case UPDATE_POST:
        draft.posts.push(action.payload);
        return;
      case SUBSCRIBE_TO_POST_COMMENTS:
        draft.comments = action.payload;
        return;
    }
  });

export default postReducer;
