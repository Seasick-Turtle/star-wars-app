import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Films from '../components/Films';
import People from '../components/People';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Vehicles from '../components/Vehicles'
import Starships from '../components/Starships';
import Results from '../components/Results';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      planets: [],
      films: [],
      people: []

    }
  }

  componentDidMount() {

  }

  async fetchPlanets() {
    fetch(`https://swapi.co/api/planets/`)
      .then(response => response.json())
      .then(data => {
        this.setState({planets: data.results});
      })

  }

  async fetchFilms() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => this.setState({films: data.results}));
  }

  async fetchPeople() {
    fetch(`https://swapi.co/api/people/`)
      .then(response => response.json())
      .then(data => this.setState({people: data.results}));
  }

  onSearchChange = (e) => {
    console.log(e.target.value);
    this.setState ({ searchField: e.target.value });
  };


  render() {
    const {searchField, planets, films, people} = this.state;


    return (
      <div className="app">
        <Router>
          <React.StrictMode>
            <React.Fragment>
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
            </React.Fragment>
          </React.StrictMode>
        </Router>

      </div>
    );

  }
}

export default App;
