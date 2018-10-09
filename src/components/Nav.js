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

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__item nav__item--collapsible-menu'>
        <li className='nav__items'><MenuItem film={TPM}/></li>
        <li className='nav__items'><MenuItem film={AOTC}/></li>
        <li className='nav__items'><MenuItem film={ROTS}/></li>
        <li className='nav__items'><MenuItem film={ANH}/></li>
        <li className='nav__items'><MenuItem film={TESB}/></li>
        <li className='nav__items'><MenuItem film={ROTJ}/></li>
        <li className='nav__items'><MenuItem film={TFA}/></li>

      </div>
      <Search />
    </nav>

  )
};

export default Nav;