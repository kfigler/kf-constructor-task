export interface Reply {
  userId: string;
  text: string;
}

export interface Comment {
  userId: string;
  text: string;
  replies: Reply[];
}

export interface Post {
  id: number | string | undefined;
  title: string;
  postedBy: string;
  postedOn: string;
  imageURL: string;
  lead: string;
  content: string;
  comments: Comment[];
}
