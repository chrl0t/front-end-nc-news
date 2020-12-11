import React from 'react';
import { format } from 'date-fns';
import * as api from '../api';
import { Link } from '@reach/router';

class CommentCard extends React.Component {
  state = {
    voteChange: 0,
    hasClicked: false,
    user: 'jessjelly'
  };

  handleChangedVotes = (votes) => {
    if (this.state.hasClicked === false) {
      this.setState((currentState) => {
        return {
          voteChange: currentState.voteChange + votes,
          hasClicked: true
        };
      });
      api.changeCommentVotes(votes, this.props.comments_id);
    }
  };

  render() {
    const { author, votes, created_at, body, comments_id } = this.props;
    return (
      <div className='comment-card'>
        <header className='comment-card-header'>
          <div className='comment-card-author-date'>
            <b>user:</b>{' '}
            <Link className='name-links' to={`/users/${author}`}>
              {author}
            </Link>{' '}
            <b>date:</b> {format(new Date(created_at), 'dd/MM/yyyy')}
          </div>
        </header>
        <div className='comment-body'>
          <p>{body}</p>
        </div>
        <footer className='comment-footer'>
          <div className='comment-footer-votes'>
            <b>votes:</b> {votes + this.state.voteChange}
            <button id='plus-emoji' onClick={() => this.handleChangedVotes(1)}>
              ➕
            </button>
            <button
              id='minus-emoji'
              onClick={() => this.handleChangedVotes(-1)}
            >
              ➖
            </button>
          </div>
          {author === 'jessjelly' ? (
            <div className='comment-footer-delete'>
              <button
                className='delete-button'
                id={comments_id}
                onClick={() => this.props.deleteComment(comments_id)}
              >
                Delete
              </button>
            </div>
          ) : null}
        </footer>
      </div>
    );
  }
}

export default CommentCard;
