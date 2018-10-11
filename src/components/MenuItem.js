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

    return (
      <React.Fragment>
        <a className='menuItem__main--dropdown filmTitle' href='#'>
          {film.title}
          <div className='menuItem__main--content'>
            <a href='#'>People</a>
            <a href='#'>Planets</a>
            <a href='#'>Species</a>
            <a href='#'>Starships</a>
            <a href='#'>Vehicles</a>
          </div>

        </a>
      </React.Fragment>
    )
  }

};
