import React from 'react';
import Loading from './Loading';
import UserArticleList from './UserArticleList';
import * as api from '../api';

class User extends React.Component {
  state = {
    user: {},
    isLoading: true
  };

  componentDidMount() {
    api.fetchUser(this.props.username).then((user) => {
      this.setState({ user, isLoading: false });
    });
  }

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div>
          <h1 className='user-title'>{`Articles by ${user.username}`}</h1>
          <UserArticleList username={user.username} />
        </div>
      );
    }
  }
}

export default User;
