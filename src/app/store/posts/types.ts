// Post action types
export const UPDATE_POST = 'UPDATE_POST';

interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: PostInterface;
}

export type PostActionTypes = UpdatePostAction;

export interface CommentInterface {
  userId: string;
  text: string;
  replies?: { userId: string; text: string }[];
}

export interface PostInterface {
  id?: number | string;
  title: string;
  postedBy: string;
  postedOn: string;
  tags: string[];
  imageURL: string;
  lead: string;
  content: string;
  comments: CommentInterface[];
}

export interface PostState {
  posts: PostInterface[];
}
