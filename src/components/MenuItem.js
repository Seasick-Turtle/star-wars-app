import React, { Component } from 'react';
import '../styles/MenuItem.css';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
  }


  render() {
    const { film } = this.props;

    console.log(film.people.length);


    return (
      <div className='menuItem__main--dropdown'>
        <a className='menuItem__filmTitle' href='#'>{film.title}</a>
        <ul className='menuItem__main-content'>
          <li className='menuItem__main-item'>
            <a href='#'>
            People
            </a>
            <ul className='menuItem__submenu'>
              <li className='menuItem__submenu-content'>{film.people.map((person) => {
                return <a className='menuItem__submenu-item' key={person.id} href='#'>{person.name}</a>
              })}</li>
            </ul>
          </li>
          <li className='menuItem__main-item'>
            <a href='#'>Planets</a>
          </li>
          <li className='menuItem__main-item'><a href='#'>Species</a> </li>
          <li className='menuItem__main-item'><a href='#'>Starships</a> </li>
          <li className='menuItem__main-item'><a href='#'>Vehicles</a> </li>
        </ul>
      </div>
    )
  }

};
