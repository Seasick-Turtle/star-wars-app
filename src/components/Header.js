import React from 'react';
import Nav from '../components/Nav';
import StarWarsLogo from '../styles/swapi-example-logo-transparent.png';

const Header = () => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      <Nav />
    </header>
  )
};

export default Header;