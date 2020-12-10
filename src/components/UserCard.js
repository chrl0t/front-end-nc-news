import React from 'react';

const UserCard = (props) => {
  const { username, name, avatar_url } = props;
  return (
    <div className='user-card'>
      <header className='user-card-header'>
        <h1>{username}</h1>
      </header>
    </div>
  );
};

export default UserCard;
