import React, { Component } from 'react';
import '../styles/Main.css';
import Planets from '../components/Planets';
import Characters from '../components/Characters';
import Movies from '../components/Movies';

export default class Main extends Component {
  render() {
    return (
      <main className='main'>
        <Planets />
        <Characters />
        <Movies />
      </main>
    )
  }
}
