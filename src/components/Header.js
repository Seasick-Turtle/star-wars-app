import React from 'react';
import Nav from '../components/Nav';
import Themes from './Themes';
import '../styles/Header.css';
import StarWarsLogo from '../styles/swapi-example-logo-transparent.png';

const Header = ({ searchChange }) => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      <div className='main-header__options'>
        <Themes />
        <Nav searchChange={searchChange}/>
      </div>
    </header>
  )
};

export default Header;