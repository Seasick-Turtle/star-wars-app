import React from 'react';
import '../styles/Search.scss';

const Search = ({searchField, searchChange}) => {
    return (
      <div className='search-main'>
        <input
          type='search'
          placeholder='Search for...'
          id='search-main__bar'
          onChange={searchChange}
        />
        <button className='search-main__search__button'>Search</button>
      </div>
    )
};

export default Search;
