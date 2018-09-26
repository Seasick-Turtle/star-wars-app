import React, { Component } from 'react';
import '../styles/Main.css';
import Planets from '../components/Planets';
import People from '../components/People';
import Films from '../components/Films';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';

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
        <div>
          <Species />
          <Starships />
          <Vehicles />
        </div>
      </main>
    )
  }
}
