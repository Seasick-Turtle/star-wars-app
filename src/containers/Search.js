import React, { Component } from 'react';
import '../styles/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className='search-main'>
       <input type='search' placeholder='Search for planets, etc.' id='search-main__bar' />

        <button className='search-main__search__button'>Search</button>

        <fieldset className='search-main__search--filter'>
          <legend>Filter By: </legend>
          <label htmlFor='planets' className='filter__items'>
            <input type='checkbox' id='planets' name='filter' checked='true'/>
            Movies
          </label>
          <label htmlFor='characters' className='filter__items'>
            <input type='checkbox'  id='characters' name='filter'/>
            Planets
          </label>
          <label htmlFor='movies' className='filter__items'>
            <input type='checkbox' id='movies' name='filter'/>
            Characters
          </label>
        </fieldset>

      </div>
    )
  }
}