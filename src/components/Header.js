import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header className='main-header'>
      <Link to='/'>
        <h2 className='header-title'>Star Wars API Example</h2>
      </Link>
      <Nav />
    </header>
  )
};

export default Header;