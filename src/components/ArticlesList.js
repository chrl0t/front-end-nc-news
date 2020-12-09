import React from 'react';
import * as api from '../api';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: 'created_at',
    orderBy: '',
    topic: ''
  };

  componentDidMount() {
    const { sortBy, sortOrder } = this.state;
    api.fetchArticles({ sortBy, sortOrder }).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const newSortBy = prevState.sortBy !== this.state.sortBy;
    const newOrderBy = prevState.orderBy !== this.state.orderBy;
    const newTopic = prevState.topic !== this.state.topic;
    if (newSortBy || newOrderBy || newTopic) {
      api
        .fetchArticles({
          sort_by: this.state.sortBy,
          order: this.state.orderBy,
          topic: this.state.topic
        })
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        });
    }
  }

  updateSorting = (event) => {
    this.setState({ sortBy: event.target.id, orderBy: event.target.name });
  };

  updateTopics = (event) => {
    this.setState({ topic: event.target.id });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
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
        <div className='articles-and-topics-container'>
          <div className='articles-list'>
            <ul>
              {articles.map((article) => {
                return <ArticleCard key={article.article_id} {...article} />;
              })}
            </ul>
          </div>
          <div className='topics'>
            <header className='topics-header'>Popular Topics</header>
            <ul className='topics-list'>
              <li id='coding' onClick={this.updateTopics}>
                👩🏻‍💻 Coding
              </li>
              <br></br>
              <li id='cooking' onClick={this.updateTopics}>
                👩🏻‍🍳 Cooking
              </li>
              <br></br>
              <li id='football' onClick={this.updateTopics}>
                ⚽️ Football
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesList;
