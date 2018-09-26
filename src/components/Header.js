import React from 'react';
import Search from '../containers/Search';
import Themes from './Themes';
import '../styles/Header.css';
import StarWarsLogo from '../styles/swapi-example-logo-transparent.png';

const Header = ({ searchQuery }) => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      <div className='main-header__options'>
        <Themes />
        <Search searchQuery={searchQuery}/>
      </div>
    </header>
  )
};

export default Header;