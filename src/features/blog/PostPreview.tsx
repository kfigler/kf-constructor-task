import React from 'react';
import { Link } from 'react-router-dom';
import { PostProps } from './Post';

interface PostPreviewProps extends PostProps {
  fullPostLink?: boolean;
}

export default function PostPreview({ fullPostLink, title, postedBy, postedOn, imageURL, lead, id }: PostPreviewProps) {
  return (
    <>
      <h1 className="mt-4">{title}</h1>
      <p className="lead">
        by
        <a href="/#"> {postedBy}</a>
      </p>
      <hr />
      <p>{postedOn}</p>
      <hr />
      <img className="img-fluid rounded" src={imageURL} alt="" />
      <hr />
      <p className="lead">{lead}</p>
      {fullPostLink ? (
        <div className="post-preview-link-container">
          <Link to={`/posts/${id}`}>Read more</Link>
        </div>
      ) : null}
    </>
  );
}
