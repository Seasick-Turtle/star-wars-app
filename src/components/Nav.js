import React from 'react';
import Search from '../containers/Search';
// import Themes from '../components/Themes';
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
import '../styles/Nav.css';

const Nav = ({ searchChange }) => {
  return (
    <nav className='nav'>
      <ul className='nav__item nav__item--collapsible-menu'>
        <li className='nav__items'><MenuItem film={TPM}/></li>
        <li className='nav__items'><MenuItem film={AOTC}/></li>
        <li className='nav__items'><MenuItem film={ROTS}/></li>
        <li className='nav__items'><MenuItem film={ANH}/></li>
        <li className='nav__items'><MenuItem film={TESB}/></li>
        <li className='nav__items'><MenuItem film={ROTJ}/></li>
        <li className='nav__items'><MenuItem film={TFA}/></li>
      </ul>
      <Search searchChange={searchChange} />
    </nav>

  )
};

export default Nav;