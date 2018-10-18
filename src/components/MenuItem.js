import React, { Component } from 'react';
import '../styles/MenuItem.css';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

  }

  displayItem = (itemsArray) => {

    return (
      <li className='menuItem__submenu-content'>
        {itemsArray.map((item) => {
          return <a className='menuItem__submenu-item' key={item.id} href='#'>{item.name}</a>;
        })}
      </li>
    )
  };

  limitItems = (film, category) => {
    const limitedList = film[category].splice(0,4);

    return (
      <React.Fragment>
        {this.displayItem(limitedList)}
        <a className='menuItem__submenu-seeMore' href='#'>See More</a>
      </React.Fragment>
    )

  };

  displayItems = (film, category) => {
    const itemList = film[category];

    if (film[category].length > 4) {
      return (
        this.limitItems(film, category)
      )
    } else {
      return this.displayItem(itemList)

    }
  };

  render() {
    const { film } = this.props;
    const categoryTitles = ['People', 'Planets', 'Species', 'Starships', 'Vehicles'];

    return (
      <div className='menuItem__main--dropdown'>
        <a className='menuItem__filmTitle' href='#'>{film.title}</a>
        <ul className='menuItem__main-content'>
          {
            categoryTitles.map((category) => {
              const lowerCaseTitle = category.toLowerCase();

              if (film[lowerCaseTitle].length === 0) {
                return ''
              }

              return (
                <li className='menuItem__main-item' key={category}>
                  <a href='#'>
                    {category}
                  </a>
                  <ul className='menuItem__submenu'>
                    {
                      this.displayItems(film, lowerCaseTitle)
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
};
