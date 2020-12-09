import React from 'react';
import * as api from '../api';
import CommentCard from './CommentCard';

class CommentsList extends React.Component {
  state = { comments: [] };

  componentDidMount() {
    api.fetchComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <ul className='comments-list'>
        {comments.map((comment) => {
          return <CommentCard key={comment.comments_id} {...comment} />;
        })}
      </ul>
    );
  }
}

export default CommentsList;
