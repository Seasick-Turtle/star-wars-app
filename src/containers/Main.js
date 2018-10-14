import React, { Component } from 'react';
// import { BrowserRouter as Route, Route, Link } from 'react-router-dom';
import '../styles/Main.css';
import Home from '../components/Home';
import Planets from '../components/Planets';
import People from '../components/People';
import Films from '../components/Films';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';
import Results from '../components/Results';

export default class Main extends Component {

  render() {
    const { searchField, planets, films, people } = this.props;

    if (searchField === '' ) {
      return (
        <main>
          <Home />
          <div className='main'>
            <Films films={films}/>
            <Planets planets={planets}/>
            <People people={people}/>
          </div>
          <div className='main'>
            <Species />
            <Starships />
            <Vehicles />
          </div>
        </main>
      )
    } else {
      return (
        <React.Fragment>
          <Results searchField={searchField}/>
        </React.Fragment>
        )
    }



  }
}
