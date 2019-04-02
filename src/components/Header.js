import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import StarWarsLogo from '../styles/swapi-example-logo-transparent.png';

const Header = () => {
  return (
    <header className='main-header'>
      <Link to='/'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      </Link>
      <Nav />
    </header>
  )
};

export default Header;