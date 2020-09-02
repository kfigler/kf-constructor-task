import { PostActionTypes, PostState, UPDATE_POST, FETCH_POSTS } from '../store/posts/types';

const initialState: PostState = {
  posts: [],
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
    default:
      return state;
  }
}
