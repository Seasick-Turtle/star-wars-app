import React, { Component, Fragment, StrictMode } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Films from '../components/Categories/Films';
import People from '../components/Categories/People';
import Planets from '../components/Categories/Planets';
import Species from '../components/Categories/Species';
import Vehicles from '../components/Categories/Vehicles'
import Starships from '../components/Categories/Starships';
import Results from '../components/Results';

class App extends Component {
  'use strict';
  constructor() {
    super();

    this.state = {
      searchField: '',
      planets: [],
      films: [],
      people: []

    }
  }

  onSearchChange = (e) => {
    console.log(e.target.value);
    this.setState ({ searchField: e.target.value });
  };


  render() {
    const { searchField } = this.state;


    return (
      <div className="app">
        <Router>
          <StrictMode>
            <Fragment>
              <Header searchChange={this.onSearchChange}/>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/films' component={Films}/>
                <Route path='/people' component={People}/>
                <Route path='/planets' component={Planets}/>
                <Route path='/species' component={Species}/>
                <Route path='/vehicles' component={Vehicles}/>
                <Route path='/starships' component={Starships}/>
                <Route path='/results' component={Results}/>
              </Switch>
            </Fragment>
          </StrictMode>
        </Router>
      </div>
    );

  }
}

export default App;
