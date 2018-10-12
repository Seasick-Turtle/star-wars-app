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
          <React.Fragment className='main'>
            <Home />
            <Films films={films}/>
            <Planets planets={planets}/>
            <People people={people}/>
          </React.Fragment>
          <React.Fragment className='main'>
            <Species />
            <Starships />
            <Vehicles />
          </React.Fragment>
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
