import React from 'react';

const UserCard = (props) => {
  const { username, name, avatar_url } = props;
  return (
    <div className='user-card-page'>
      <div className='user-card'>
        <header className='user-card-header'>
          <h1>{username}</h1>
          <div className='user-card-content'>
            <div className='avatar-section'>
              <img className='avatar' src={avatar_url} alt='avatar' />
            </div>
            <div className='name-of-user'>
              <h3>{name}</h3>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default UserCard;
