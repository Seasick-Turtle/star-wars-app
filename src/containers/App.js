import React, {Component} from 'react';
import Header from '../components/Header';
import Main from '../containers/Main';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      planets: [],
      films: [],
      people: []

    }
  }

  componentDidMount() {
    this.fetchPlanets();
    this.fetchPeople();
    this.fetchFilms();
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

  fetchPeople() {
      fetch(`https://swapi.co/api/people/`)
        .then(response => response.json())
        .then(data => this.setState({people: data.results}));
  }


  render() {
    const {search, planets, films, people} = this.state;


    return (
      <div className="app">
        <Header search={search}/>
        <Main
          planets={planets}
          films={films}
          people={people}
        />
      </div>
    );

  }
}

export default App;
