import React from 'react';
import Loading from './Loading';
import UserCard from './UserCard';
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
          <UserCard key={user.username} {...user} />
          <UserArticleList username={this.state.user.username} />
        </div>
      );
    }
  }
}

export default User;
