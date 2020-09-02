import { PostInterface, FETCH_POSTS, UPDATE_POST, PostActionTypes } from './types';

export function fetchPosts(payload: PostInterface[]): PostActionTypes {
  return {
    type: FETCH_POSTS,
    payload,
  };
}

export function updatePost(post: PostInterface): PostActionTypes {
  return {
    type: UPDATE_POST,
    payload: post,
  };
}
