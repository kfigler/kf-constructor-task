import { PostActionTypes, PostState, UPDATE_POST, FETCH_POSTS, SUBSCRIBE_TO_POST_COMMENTS } from '../store/posts/types';

const initialState: PostState = {
  posts: [],
  comments: [],
};

export default function postReducer(state = initialState, action: PostActionTypes): PostState {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts.filter((post) => post.id !== action.payload.id)],
      };
    case SUBSCRIBE_TO_POST_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}
