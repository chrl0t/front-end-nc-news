import React from 'react';
import { format } from 'date-fns';

class CommentCard extends React.Component {
  state = {
    comment: {}
  };

  handleChangedVotes = (votes) => {
    const { comment } = this.state;
  };

  render() {
    const { author, votes, created_at, body } = this.props;
    return (
      <div className='comment-card'>
        <header className='comment-card-header'>
          <div className='comment-card-author-date'>
            <b>user:</b> {author} <b>date:</b>{' '}
            {format(new Date(created_at), 'dd/MM/yyyy')}
          </div>
        </header>
        <div className='comment-body'>
          <p>{body}</p>
        </div>
        <footer className='comment-footer'>
          <p className='comment-votes'>
            <b>votes:</b> {votes}
            <button id='plus-emoji' onClick={() => this.handleChangedVotes(1)}>
              ➕
            </button>
            <button
              id='minus-emoji'
              onClick={() => this.handleChangedVotes(-1)}
            >
              ➖
            </button>
          </p>
        </footer>
      </div>
    );
  }
}

export default CommentCard;
