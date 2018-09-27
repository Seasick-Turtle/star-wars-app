import React from 'react';
import '../styles/Search.css';

const Search = ({searchField, searchChange}) => {
    return (
      <div className='search-main'>
        <input
          type='search'
          placeholder='Search for planets, etc.'
          id='search-main__bar'
          onChange={searchChange}
        />

        <button className='search-main__search__button'>Search</button>

        <fieldset className='search-main__search--filter'>
          <legend>Filter By:</legend>
          <label htmlFor='movies' className='filter__items'>
            <input type='checkbox' id='movies' name='filter'/>
            Movies
          </label>
          <label htmlFor='planets' className='filter__items'>
            <input type='checkbox' id='planets' name='filter'/>
            Planets
          </label>
          <label htmlFor='characters' className='filter__items'>
            <input type='checkbox' id='characters' name='filter'/>
            Characters
          </label>
        </fieldset>

      </div>
    )
};

export default Search;
