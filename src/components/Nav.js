import React from 'react';
import MenuItem from '../components/MenuItem';
import {
  TPM,
  AOTC,
  ROTS,
  ANH,
  TESB,
  ROTJ,
  TFA
} from '../Constants';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

// imports MenuItem in order to display the Navbar items
const Nav = () => {
  return (
    <nav className='nav nav--collapsible'>
      <ul className='nav__item'>
        <li className='nav__items'>
          <Link
            className='nav__home'
            to={{
              pathname: `/`
          }}
          >
            Home
          </Link>
        </li>
        <li className='nav__items'>
          <MenuItem film={TPM}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={AOTC}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={ROTS}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={ANH}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={TESB}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={ROTJ}/>
        </li>
        <li className='nav__items'>
          <MenuItem film={TFA}/>
        </li>
      </ul>
    </nav>

  )
};

export default Nav;