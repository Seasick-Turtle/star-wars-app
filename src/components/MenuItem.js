import React, { Component } from 'react';
import '../styles/MenuItem.css';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

  }

  /*
  function accepts an array, maps over it and returns
  what is used for the nested drop down menu
  TODO: display item in Main.js when user clicks on item
   */
  displayItem = (itemsArray) => {

    return (
      <li className='menuItem__submenu-content'>
        {itemsArray.map((item) => {
          return <a className='menuItem__submenu-item' key={item.id} href='#'>{item.name}</a>;
        })}
      </li>
    )
  };

  /*
  function used to limit the amount of items that
  will be displayed when a user checks out a particular
  category (people, planets, etc)

  TODO: clicking on see more takes user to index page
   */
  limitItems = (film, category) => {
    const limitedList = film[category].splice(0,4);

    return (
      <React.Fragment>
        {this.displayItem(limitedList)}
        <a className='menuItem__submenu-seeMore' href='#'>See More</a>
      </React.Fragment>
    )

  };

  /*
  function calls limitItems if needed, otherwise
  display items from itemList array
   */
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
              // To prevent issues, lowercase each item
              const lowerCaseTitle = category.toLowerCase();

              // prevents empty categories from showing up
              if (film[lowerCaseTitle].length === 0) {
                return ''
              }

              /*
              returns dropdown menu with each category name
              (people, planets, vehicles, starhsips, species)
              along with calling this.displayItems in order to create
              nested dropdown menu with more specific items such as
              Luke Skywalker, Droids, Dagobah, etc. from that particular film
               */
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
