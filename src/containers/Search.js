import React, { Component } from 'react';
import '../styles/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className='search-main'>
        {/*<i className='search-icon'></i>*/}
       <input type='search' placeholder='Search for planets, etc.' id='search-main__bar' />

        <button className='search-main__search-button'>Search</button>
        <div>
          Filter By:
          <button className='search-main__filter-button'>Planets</button>
          <button className='search-main__filter-button'>Characters</button>
          <button className='search-main__filter-button'>Movies</button>
        </div>

      </div>
    )
  }
}