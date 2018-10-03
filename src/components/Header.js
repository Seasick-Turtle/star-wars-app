import React from 'react';
import Nav from '../components/Nav';
import Search from '../containers/Search';
import '../styles/Header.css';
import StarWarsLogo from '../styles/swapi-example-logo-transparent.png';

const Header = ({ searchChange }) => {
  return (
    <header className='main-header'>
        <img src={StarWarsLogo} alt='gold star wars logo' className='logo'/>
      <div className='main-header__options'>
        <Search searchChange={searchChange}/>
      </div>
      <Nav />
    </header>
  )
};

export default Header;