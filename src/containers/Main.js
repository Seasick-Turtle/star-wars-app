import React, { Component } from 'react';
import '../styles/Main.css';
import Planets from '../components/Planets';
import People from '../components/People';
import Films from '../components/Films';

export default class Main extends Component {

  render() {
    const { planets, films, people } = this.props;
    return (
      <main>
        <div className='main'>
          <Films films={films}/>
          <Planets planets={planets}/>
          <People people={people}/>
        </div>
      </main>
    )
  }
}
