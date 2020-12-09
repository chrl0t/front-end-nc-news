import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className='header'>
      <Link className='header' to={'/'}>
        <h1 className='header-title'>NC NEWS</h1>
      </Link>
    </header>
  );
};

export default Header;
