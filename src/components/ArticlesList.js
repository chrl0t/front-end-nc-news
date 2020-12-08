import React from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: 'created_at',
    orderBy: ''
  };

  componentDidMount() {
    api
      .fetchArticles({ sort_by: this.state.sortBy, order: this.state.orderBy })
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      });
  }

  componentDidUpdate(prevProp, prevState) {
    const newSortBy = prevState.sortBy !== this.state.sortBy;
    const newOrderBy = prevState.orderBy !== this.state.orderBy;
    if (newSortBy || newOrderBy) {
      api
        .fetchArticles({
          sort_by: this.state.sortBy,
          order: this.state.orderBy
        })
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        });
    }
  }

  updateSorting = (event) => {
    this.setState({ sortBy: event.target.id, orderBy: event.target.name });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <h1>Loading Articles...</h1>;
    }
    return (
      <div>
        <div className='sort-buttons'>
          <button
            className='sort-button'
            id='created_at'
            onClick={this.updateSorting}
          >
            Newest
          </button>
          <button
            className='sort-button'
            id='created_at'
            name='desc'
            onClick={this.updateSorting}
          >
            Oldest
          </button>
          <button
            className='sort-button'
            id='votes'
            name='asc'
            onClick={this.updateSorting}
          >
            Most Votes
          </button>
          <button
            className='sort-button'
            id='votes'
            name='desc'
            onClick={this.updateSorting}
          >
            Least Votes
          </button>
        </div>
        <ul className='articles-list'>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
