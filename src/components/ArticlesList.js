import React from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    console.log('mounted');
    api.fetchArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h1>Loading Articles...</h1>;
    }
    return (
      <ul className='articles-list'>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    );
  }
}

export default ArticlesList;
