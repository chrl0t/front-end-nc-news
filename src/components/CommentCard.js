import React from 'react';

const CommentCard = (props) => {
  const { author, votes, created_at, body } = props;
  return (
    <li className='comment-card'>
      <p>{author}</p>
      <p>{votes}</p>
      <p>{created_at}</p>
      <p>{body}</p>
    </li>
  );
};

export default CommentCard;
