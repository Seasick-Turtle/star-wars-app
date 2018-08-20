import React from 'react';
import Search from '../containers/Search';
import Themes from './Themes';
import '../styles/Header.css';
import StarWarsLogo from './star_wars_logo_PNG30.png';

const Header = () => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      <div className='main-header__options'>
        <Themes />
        <Search />
      </div>
    </header>
  )
};

export default Header;