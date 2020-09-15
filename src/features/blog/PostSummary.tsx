import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { PostInterface } from '../../app/store/posts/types';
import { Link } from 'react-router-dom';
import { formatISODate } from '../../app/common/utils/formatISODate';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/reducers/rootReducer';

interface PostPreviewProps {
  post: PostInterface;
  fullPostLink?: boolean;
}

export default function PostPreview({ post, fullPostLink }: PostPreviewProps) {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { title, postedBy, postedOn, imageURL, lead, tags, id, userId } = post;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-4">{title}</h1>
        {currentUser === userId ? (
          <Button as={Link} to={`/posts/edit/${id}`}>
            EDIT
          </Button>
        ) : null}
      </div>
      <p className="lead">
        by
        <a href="/#"> {postedBy}</a>
      </p>
      <hr />
      <div className="d-flex justify-content-between align-items-top tag-container">
        <p>{formatISODate(postedOn)}</p>
        <p>
          {tags.map((tag, index) => (
            <Badge key={`${tag}-${index}`} variant="primary">
              {tag}
            </Badge>
          ))}
        </p>
      </div>
      <hr />
      <img className="img-fluid rounded" src={imageURL} alt={`Post preview ${id}`} />
      <hr />
      <p className="lead">{lead}</p>
      {fullPostLink ? <Link to={`/posts/${id}`}>Read more</Link> : null}
    </>
  );
}
