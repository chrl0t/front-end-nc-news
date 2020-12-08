import React from 'react';
import { fetchArticle } from '../api';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import * as api from '../api';

class Article extends React.Component {
  state = {
    article: {},
    isLoading: true,
    hasError: false,
    errorMessage: ''
  };

  componentDidMount() {
    fetchArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        const {
          response: { status, statusText }
        } = err;
        this.setState({
          hasError: true,
          errorMessage: `${status} - ${statusText}`,
          isLoading: false
        });
      });
  }

  handleChangedVotes = (votes) => {
    const { article } = this.state;
    api.changeVotes(article.article_id, votes).then((article) => {
      this.setState({ article });
    });
  };

  render() {
    const { article, isLoading, errorMessage, hasError } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessage errorMessage={errorMessage} />;
    } else {
      return (
        <div className='article'>
          <h1 className='article-title'>{article.title}</h1>
          <p className='article-body'>{article.body}</p>
          <br></br>
          <footer className='article-footer'>
            <div className='article-footer-comments'>
              <b>comments:</b> {article.comment_count}
            </div>
            <div className='article-vote-buttons'>
              <button
                id='plus-emoji'
                onClick={() => this.handleChangedVotes(1)}
              >
                ➕
              </button>
              <button
                id='minus-emoji'
                onClick={() => this.handleChangedVotes(-1)}
              >
                ➖
              </button>
            </div>
            <div className='article-footer-votes'>
              <b>votes:</b> {article.votes}
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default Article;
