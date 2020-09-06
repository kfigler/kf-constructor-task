import React from 'react';

interface CommentProps {
  text: string;
  userId: string;
  email: string;
}

export default function Comment({ text, userId, email }: CommentProps) {
  return (
    <div className="media mb-4">
      <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt={`user-${userId}`} />
      <div className="media-body">
        <h5 className="mt-0">{email}</h5>
        {text}
      </div>
    </div>
  );
}
