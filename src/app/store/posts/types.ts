// Post action types
export const UPDATE_POST = 'UPDATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const SUBSCRIBE_TO_POST_COMMENTS = 'SUBSCRIBE_TO_POST_COMMENTS';

export interface PostState {
  posts: PostInterface[];
  comments: CommentInterface[];
}

interface FetchPostAction {
  type: typeof FETCH_POSTS;
  payload: PostInterface[];
}

interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: PostInterface;
}

interface SubscribeToCommentsAction {
  type: typeof SUBSCRIBE_TO_POST_COMMENTS;
  payload: CommentInterface[];
}

export type PostActionTypes = UpdatePostAction | FetchPostAction | SubscribeToCommentsAction;

export interface CommentInterface {
  userId: string;
  text: string;
  email: string;
}

export interface PostInterface {
  id?: string;
  title: string;
  postedBy: string;
  postedOn: Date;
  tags: string[];
  imageURL: string;
  lead: string;
  content: string;
  userId: string;
}
