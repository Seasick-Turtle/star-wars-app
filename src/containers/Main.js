import React, { Component } from 'react';
import '../styles/Main.css';
import Planets from '../components/Planets';
import Characters from '../components/Characters';
import Movies from '../components/Movies';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      planets: [],
      movies: [],
      characters: []
    }
  }

  render() {

    return (
      <main>
        <div className='main'>
          <Movies />
          <Planets />
          <Characters />
        </div>
      </main>
    )
  }
}
