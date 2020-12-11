import React from 'react';
import { Link } from '@reach/router';
import { format } from 'date-fns';

const ArticleCard = (props) => {
  const { topic, author, created_at, votes, title, article_id } = props;
  return (
    <div className='article-card'>
      <header className='article-card-header'>
        <b>topic:</b> {topic} <b>author:</b>{' '}
        <Link className='name-links' to={`/users/${author}`}>
          {author}
        </Link>{' '}
        <b>date: </b>
        {format(new Date(created_at), 'dd/MM/yyyy')} <b>votes:</b> {votes}
      </header>
      <div>
        <Link className='article-card-title' to={`/${article_id}`}>
          <h1>{title}</h1>
        </Link>
      </div>
      <footer>
        <Link className='article-card-footer' to={`/${article_id}`}>
          <b>comments</b>
        </Link>
      </footer>
    </div>
  );
};

export default ArticleCard;
