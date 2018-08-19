import React from 'react';
import SearchBox from '../containers/SearchBox';
import Themes from './Themes';

const Header = () => {
  return (
    <div>
      <p>STAR WARS</p>
      <SearchBox />
      <Themes />
    </div>
  )
};

export default Header;