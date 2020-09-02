// Post action types
export const UPDATE_POST = 'UPDATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

interface FetchPostAction {
  type: typeof FETCH_POSTS;
  payload: PostInterface[];
}

interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: PostInterface;
}

export type PostActionTypes = UpdatePostAction | FetchPostAction;

export interface CommentInterface {
  userId: string;
  text: string;
  replies?: { userId: string; text: string }[];
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

export interface PostState {
  posts: PostInterface[];
}
