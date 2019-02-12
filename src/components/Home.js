import React, {Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { loadState, saveState } from '../localStorage';
import '../styles/Home.css';

export default class Home extends Component {
  constructor() {
    super();

    // create local state for randomized values
    this.state = {
      films: {},
      people: {},
      planets: {},
      species: {},
      vehicles: {},
      starships: {}
    }
  }

  // class field use to cancel API requests
  // false is default value in order to make requests
  _isMounted = false;

  // // use component did Update to update state and local storage
  componentDidUpdate(prevProps, prevState, snapshot) {

    // checks if prevState is up to date, if not, update
    if (prevState !== this.state) {
      const categories = ['films', 'people', 'planets', 'species', 'vehicles', 'starships'];

      for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        saveState(category, this.state[category]);
      }
    }
  }

  componentDidMount() {
    this.fetchAllCategorys(['films', 'people', 'planets', 'species', 'vehicles', 'starships']);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchAllCategorys = (categories) => {

    // checks if a day has passed, if not, don't
    // fetch data again
    if (!this.hasOneDayPassed() ) {
      // set each category state to the data stored in localStorage
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        this.setState((state) => ({
          [category]: loadState(category)
        }))
      }

      return false;
    }

    for (let i = 0; i < categories.length; i++) {
       this.fetchCategory(categories[i]);
    }

  };

  hasOneDayPassed = () => {
    // create new Date object/string for comparison
    let date = new Date().toLocaleDateString();

    // should fetchAllCategorysDate match with the current date
    // return false, do nothing
    if (localStorage.fetchAllCategorysDate === date) {
      return false;
    }

    // otherwise return true and set fetchAllCategorysDate to
    // current day
    localStorage.fetchAllCategorysDate = date;
    return true;
  };

  fetchCategory = (category) => {
    /*
     * function used to generate a random value
     * between 1 and the max number in each category
     */
    const fetchRandomData = (category) => {

      const MIN = 1;
      let max;

      switch (category) {
        case 'films':
          max = 7;
          break;
        case 'people':
          max = 87;
          break;
        case 'planets':
          max = 61;
          break;
        case 'species':
          max = 37;
          break;
        case 'vehicles':
          max = 39;
          break;
        case 'starships':
          max = 37;
          break;
        default:
          break;
      }

      return (Math.floor(Math.random() * (max - MIN + 1)) + MIN);

    };

    let categoryNum = fetchRandomData(category);
    const url = `https://swapi.co/api/${category}/${categoryNum}/`;

    /*
     * fetches data from SWAPI with random number for
     * a particular category, if successful push to state
     * if the response status is anything other than ok
     * try again until successful
     */
    const fetchData = async (url, category) => {
      try {
        const response = await fetch(url);

        if(!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        /*
         * Take the data from the API call and push it to
         * state; in order to prevent the homeworld urls
         * from showing instead of the actual planet, call
         * fetchHomeworld and replace the url in state
         */

        // check to see if mounted, if so, cancel API request
        if (this._isMounted) {
          this.setState((state, props) => ({
            [category]: data
          }), () => {
            if (data.homeworld) {
              return this.fetchHomeworld(category, data.homeworld);
            }
          });
        }

        await saveState(category, data);
      } catch (err) {
        await this.fetchCategory(category);
      }
    };

    fetchData(url, category);

  };

  /*
  This is used to replace the url that is initially
  sent by the API request with the actual name of the
  planet.
   */

  fetchHomeworld = async (category, homeworldURL) => {
    try {
      const response = await fetch(homeworldURL);

      if(!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      const homeworld = data.name;

      this.setState((state) => ({
        [category]: {
          ...state[category],
          homeworld: homeworld
        }
      }));

    } catch (err) {
      console.log(err);
    }

  };

  displayCategory = (category) => {

    const displayListItem = (category, detail, property) => {
      return (
        <Fragment>
          { `${detail}: ${this.state[category][property]}` }
        </Fragment>
      );
    };

    const displayListItems = (category) => {
      switch (category) {
        case 'films':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Directed by', 'director')}
              </li>
              <li>
                { displayListItem(category, 'Produced by', 'producer')}
              </li>
              <li>
                { displayListItem(category, 'Released', 'release_date')}
              </li>
            </Fragment>
          );
        case 'vehicles':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Model', 'model')}
              </li>
              <li>
                { displayListItem(category, 'Manufacturer', 'manufacturer')}
              </li>
              <li>
                { displayListItem(category, 'Crew', 'crew')}
              </li>
            </Fragment>
          );
        case 'starships':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Model', 'model')}
              </li>
              <li>
                { displayListItem(category, 'Manufacturer', 'manufacturer')}
              </li>
              <li>
                { displayListItem(category, 'Crew', 'crew')}
              </li>
            </Fragment>
          );
        case 'planets':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Climate', 'climate')}
              </li>
              <li>
                { displayListItem(category, 'Terrain', 'terrain')}
              </li>
              <li>
                { displayListItem(category, 'Population', 'population')}
              </li>
            </Fragment>
          );
        case 'species':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Classification', 'episode_id')}
              </li>
              <li>
                { displayListItem(category, 'Average Lifespan', 'episode_id')}
              </li>
              <li>
                { displayListItem(category, 'Homeworld', 'homeworld')}
              </li>
            </Fragment>
          );
        case 'people':
          return (
            <Fragment>
              <li>
                { displayListItem(category, 'Birth Year', 'birth_year')}
              </li>
              <li>
                { displayListItem(category, 'Homeworld', 'homeworld')}
              </li>
              <li>
                { displayListItem(category, 'Gender', 'gender')}
              </li>
            </Fragment>
          );
        default:
          break;
      }
    };

    let categoryTitle  = this.state[category].title || this.state[category].name;

    return (
      <Fragment>
        <h3>{categoryTitle}</h3>
        <ul>
          {displayListItems(category)}
        </ul>
        <Link
          className='home__category'
          to={{
            pathname: `/${category}/${categoryTitle}`,
            state: {[category]: this.state[category]}
          }} >See more</Link>
      </Fragment>
    )
  };

  render() {
    const categories = ['Films', 'People', 'Planets', 'Species', 'Vehicles', 'Starships'];

    return (
      <div className='home-main'>
        <h2 className='home-main__title'>Star Wars API Example</h2>
        {
          categories.map((category) => {
            return (
              <div key={category} className='home__categories'>
                <h2>{category}</h2>
                <Fragment>
                  {this.displayCategory(category.toLowerCase())}
                </Fragment>
              </div>
            )

          })
        }
      </div>
    )
  }
};
