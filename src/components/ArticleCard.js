import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = (props) => {
  const { topic, author, created_at, votes, title, article_id } = props;
  return (
    <div className='article-card'>
      <header className='article-card-header'>
        <b>topic:</b> {topic} <b>user:</b> {author} <b>date: </b>
        {created_at} <b>votes:</b> {votes}
      </header>
      <div>
        <Link className='article-card-title' to={`/${article_id}`}>
          <h1>{title}</h1>
        </Link>
      </div>
      <footer className='article-card-footer'>
        <b>comments</b>
      </footer>
    </div>
  );
};

export default ArticleCard;
