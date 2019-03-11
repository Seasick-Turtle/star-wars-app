import React from 'react';
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

  return (
    <nav className='nav nav--collapsible'>
      <ul className='nav__list'>
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