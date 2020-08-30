//

// Post action types
export const UPDATE_POST = 'UPDATE_POST';

// TODO Put this into types maybe
interface UpdatePostAction {
  type: string;
  payload: PostInterface;
}

export type PostActionTypes = UpdatePostAction;

export interface CommentInterface {
  userId: string;
  text: string;
  replies?: { userId: string; text: string }[];
}

// TODO Change Post to PostInterface and change all corresponding types
export interface PostInterface {
  id?: number | string;
  title: string;
  postedBy: string;
  postedOn: string;
  imageURL: string;
  lead: string;
  content: string;
  comments: CommentInterface[];
}

export interface PostState {
  posts: PostInterface[];
}
