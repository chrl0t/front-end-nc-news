import React from 'react';
import * as api from '../api';

class CommentAdder extends React.Component {
  state = { author: 'jessjelly', body: '' };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    api.postComment(this.state, this.props.article_id).then((comment) => {
      this.props.addComment(comment);
      this.setState({
        author: 'jessjelly',
        body: ''
      });
    });
  };

  render() {
    const { body } = this.state;
    return (
      <form className='comment-form' onSubmit={this.handleSubmit} noValidate>
        <textarea
          className='comment-input-box'
          type='text'
          name='body'
          id='body'
          onChange={this.handleChange}
          value={body}
          required
        ></textarea>
        <br></br>
        <input type='submit' className='sort-button' value='Add Comment' />
      </form>
    );
  }
}

export default CommentAdder;
