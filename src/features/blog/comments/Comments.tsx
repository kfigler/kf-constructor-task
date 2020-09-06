import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import { CommentInterface } from '../../../app/store/posts/types';
import { RootState } from '../../../app/reducers/rootReducer';
import { getPostChatRef } from '../../../app/firestore/firestoreService';
import { subscribeToPostComments } from '../../../app/store/posts/actions';

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    // Value brings down the initial comments and sets up a listener
    getPostChatRef(postId).on('value', (snapshot) => {
      if (!snapshot.exists()) return;
      const updatedComments: CommentInterface[] = [];
      for (let key in snapshot.val()) {
        updatedComments.push(snapshot.val()[key]);
      }
      dispatch(subscribeToPostComments(updatedComments));
    });
  }, [postId, dispatch]);

  return (
    <>
      {comments &&
        comments.length > 0 &&
        comments.map((comment: CommentInterface, index: number) => <Comment key={`comment-${index}`} {...comment} />)}
    </>
  );
}
