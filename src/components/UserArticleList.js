import React from 'react';
import * as api from '../api';
import Loading from './Loading';
import ArticleCard from './ArticleCard';

class UserArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchArticles({ author: this.props.username }).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className='articles-list'>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UserArticleList;
