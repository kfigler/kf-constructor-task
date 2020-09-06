import {
  PostInterface,
  FETCH_POSTS,
  UPDATE_POST,
  SUBSCRIBE_TO_POST_COMMENTS,
  PostActionTypes,
  CommentInterface,
} from './types';

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

export function subscribeToPostComments(comments: CommentInterface[]): PostActionTypes {
  return {
    type: SUBSCRIBE_TO_POST_COMMENTS,
    payload: comments,
  };
}
