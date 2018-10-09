import React from 'react';
import '../styles/MenuItem.css';

const MenuItem  = ({ film }) => {
  return (
    <React.Fragment>
      <a className='filmTitle' href='#'>{film.title}</a>
    </React.Fragment>
  )
};

export default MenuItem;