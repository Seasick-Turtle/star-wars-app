import React from 'react';
import Search from '../containers/Search';
import { FILMS_NAV } from '../Constants';
import '../styles/Nav.css';

const Nav = ({ searchChange }) => {
  return (
    <nav className='nav'>
        {
          FILMS_NAV.map(film => {
            return <a className='nav__items' key={film}>{film}</a>
          })
        }
      <Search searchChange={searchChange}/>
    </nav>

  )
};

export default Nav;