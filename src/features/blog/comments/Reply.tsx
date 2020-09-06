import React from 'react';

interface ReplyProps {
  userId: string;
  text: string;
}

// TODO delete this probably
export default function Reply({ userId, text }: ReplyProps) {
  return (
    <div className={'media mt-4'}>
      <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
      <div className="media-body">
        <h5 className="mt-0">{userId}</h5>
        {text}
      </div>
    </div>
  );
}
