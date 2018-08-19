import React from 'react';
import SearchBox from '../containers/SearchBox';
import Themes from './Themes';
import '../styles/Header.css';
import StarWarsLogo from './star_wars_logo_PNG30.png';

const Header = () => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
        <SearchBox />
        <Themes />
    </header>
  )
};

export default Header;