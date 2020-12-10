import React from 'react';
import Loading from './Loading';
import UserCard from './UserCard';
import * as api from '../api';

class User extends React.Component {
  state = {
    user: {},
    isLoading: true
  };
  componentDidMount() {
    api.fetchUser(this.props.username).then((user) => {
      this.setState({ user, isLoading: false });
      console.log(this.state);
    });
  }

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return <UserCard key={user.username} {...user} />;
    }
  }
}

export default User;
