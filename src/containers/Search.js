import React, { Component } from 'react';
import '../styles/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className='search-main'>

       <input type='search' placeholder='Search for planets, etc.' id='search-main__bar' />
        <button className='search-main__button'>Search</button>
        <div>
          Filter By:
          <button>Planets</button>
          <button>Characters</button>
          <button>Movies</button>
        </div>

      </div>
    )
  }
}