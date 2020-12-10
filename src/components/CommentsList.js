import React from 'react';
import * as api from '../api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentsList extends React.Component {
  state = { comments: [] };

  componentDidMount() {
    api.fetchComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  addComment = (comment) => {
    this.setState((currentState) => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentAdder
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <ul className='comments-list'>
          {comments.map((comment) => {
            return <CommentCard key={comment.comments_id} {...comment} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
