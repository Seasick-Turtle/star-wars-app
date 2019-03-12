import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TPM,
  AOTC,
  ROTS,
  ANH,
  TESB,
  ROTJ,
  TFA
} from '../Constants';

// imports MenuItem in order to display the Navbar items
const Nav = () => {
  const films =
    [
      TPM, AOTC, ROTS, ANH,
      TESB, ROTJ, TFA
    ];

  const [showMenu, setShowMenu] = useState(false);
  const [turnedArrow, setTurnedArrow] = useState(false);

  // toggles the state of the visibility of the menu
  // changes id display attribute from none to inline-flex
  // prevents the animation from playing on page load
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.getElementById('menu').style.display = 'inline-flex';
    setTurnedArrow(!turnedArrow);
  };

  return (
    <nav className='nav'>
      <div className='nav__navigation'>
        <li
          className='nav__items'>
          <Link
            key={'home'}
            className='nav__home'
            to={{
              pathname: `/`
            }}
          >
            Home
          </Link>
        </li>
        <button onClick={toggleMenu} className='nav__button'>
          <i className={turnedArrow ? 'fas fa-caret-down rotated' :'fas fa-caret-down'}> </i>
          Menu
        </button>
      </div>

      <ul id='menu' className={(showMenu ? 'nav__list menu--active' : 'nav__list menu--hidden')} >

        {
          films.map(film => {
            return (
              <li key={film.title} className='nav__items'>
                <Link
                  key={film.id}
                  className='nav__item'
                  film={film}
                  to={{
                    pathname: `/films/${film.title.replace(/\s+/g, '')}`,
                    state: {
                      film
                    }
                  }}
                >
                  {film.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )

};

export default Nav;