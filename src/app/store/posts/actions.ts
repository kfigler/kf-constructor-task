import { PostInterface, UPDATE_POST, PostActionTypes } from './types';

export function updatePost(post: PostInterface): PostActionTypes {
  return {
    type: UPDATE_POST,
    payload: post,
  };
}
