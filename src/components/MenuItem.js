import React, { Component } from 'react';
import '../styles/MenuItem.css';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
  }

  displayItems = (film, category ) => {
    if (film[category].length > 10) {
      return (
        <React.Fragment>
          {this.limitItems(film, category)}
          <a href='#'>See More</a>
        </React.Fragment>
      )
    } else {
      return (
        <li className='menuItem__submenu-content'>{film[category].map((item) => {
          {
            if (film[category].length < 11) {
              return <a className='menuItem__submenu-item' key={item.id} href='#'>{item.name}</a>;
            }
          }
        })}</li>
      )
    }
  };

  limitItems = (film, category ) => {
    return (
      <li className='menuItem__submenu-content'>{film[category].map((item) => {
        {
          if (film[category].length < 11) {
            return <a className='menuItem__submenu-item' key={item.id} href='#'>{item.name}</a>;
          } else {
            film[category].splice(10).map((item) => {
              return <a className='menuItem__submenu-item' key={item.id} href='#'>{item.name}</a>;
            });
          }
        }
      })}</li>
    )
  };

  render() {
    const { film } = this.props;

    return (
      <div className='menuItem__main--dropdown'>
        <a className='menuItem__filmTitle' href='#'>{film.title}</a>
        <ul className='menuItem__main-content'>
          <li className='menuItem__main-item'>
            <a href='#'>
            People
            </a>
            <ul className='menuItem__submenu'>
              {this.displayItems(film, 'people')}
            </ul>
          </li>
          <li className='menuItem__main-item'>
            <a href='#'>Planets</a>
            <ul className='menuItem__submenu'>
              {this.displayItems(film, 'planets')}
            </ul>
          </li>
          <li className='menuItem__main-item'>
            <a href='#'>Species</a>
            <ul className='menuItem__submenu'>
              {this.displayItems(film, 'species')}
            </ul>
          </li>
          <li className='menuItem__main-item'>
            <a href='#'>Starships</a>
            <ul className='menuItem__submenu'>
              {this.displayItems(film, 'starships')}
            </ul>
          </li>
          {
            (film.title === 'The Force Awakens' ? '' :
             (
              <li className='menuItem__main-item'>
                <a href='#'>Vehicles</a>
                <ul className='menuItem__submenu'>
                  {this.displayItems(film, 'vehicles')}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
};
