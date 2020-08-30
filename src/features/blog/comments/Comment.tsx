import React from 'react';
import Reply from './Reply';
import { CommentInterface } from '../../../app/store/posts/types';

interface CommentProps {
  text: string;
  userId: string;
  replies?: CommentInterface[];
}

export default function Comment({ text, userId, replies }: CommentProps) {
  return (
    <div className="media mb-4">
      <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt={`user-${userId}`} />
      <div className="media-body">
        <h5 className="mt-0">{userId}</h5>
        {text}
        {replies && replies.map((reply, index) => <Reply key={`reply-${index}`} {...reply} />)}
      </div>
    </div>
  );
}
