import React from 'react';
import Themes from '../components/Themes';
import { FILMS_NAV } from '../Constants';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__item nav__item--collapsible-menu'>
        {
          FILMS_NAV.map((film, index )=> {
            let filmIndex = index + 1;
            console.log(filmIndex);
            return <li className='nav__items' key={filmIndex}><a key={filmIndex}>{film}</a></li>
          })
        }
      <Themes />
      </div>
    </nav>

  )
};

export default Nav;