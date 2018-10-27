import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../containers/Main';
import '../styles/App.css';

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
        <React.StrictMode>
        <Header searchChange={this.onSearchChange}/>
        <Main
          searchField={searchField}
          planets={planets}
          films={films}
          people={people}
        />
        </React.StrictMode>
      </div>
    );

  }
}

export default App;
