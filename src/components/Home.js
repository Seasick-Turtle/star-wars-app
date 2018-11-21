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


  componentDidMount() {
    this.fetchAllSections(['films', 'people', 'planets', 'species', 'vehicles', 'starships'])
  }

  componentWillUnmount() {

  }

  fetchAllSections = (sections) => {

    // set each section state to the data stored in localStorage
    sections.map((section) => {
      this.setState((state, props) => ({
        [section]: loadState([section])
      }))
    });

    // // checks if a day has passed, if not don't go through with
    // // the rest of the function
    if (!this.hasOneDayPassed() ) {
      return false;
    }

    // fetches the data for each section
    for (let i = 0; i < sections.length; i++) {
       this.fetchSection(sections[i]);
    }

  };

  hasOneDayPassed = () => {
    // create new Date object/string for comparison
    let date = new Date().toLocaleDateString();

    // should fetchAllSectionsDate match with the current date
    // return false, do nothing
    if (localStorage.fetchAllSectionsDate === date) {
      return false;
    }

    // otherwise return true and set fetchAllSectionsDate to
    // current day
    localStorage.fetchAllSectionsDate = date;
    return true;
  };

  fetchSection = (section) => {
    /*
     * function used to generate a random value
     * between 1 and the max number in each category
     */
    const fetchRandomSection = (section) => {

      const MIN = 1;
      let max;

      switch (section) {
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

    let sectionNum = fetchRandomSection(section);
    const url = `https://swapi.co/api/${section}/${sectionNum}/`;

    /*
     * fetches data from SWAPI with random number for
     * a particular category, if successful push to state
     * if the response status is anything other than ok
     * try again until successful
     */
    const fetchData = async (url, section) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        /*
         * Take the data from the API call and push it to
         * state; in order to prevent the homeworld urls
         * from showing instead of the actual planet, call
         * fetchHomeworld and replace the url in state
         */

        this.setState((state, props) => ({
         [section]: data
        }), () => {
          if (data.homeworld) {
           return this.fetchHomeworld(section, data.homeworld);
          }
        });
        saveState(section, data);
      } catch (err) {
        return await this.fetchSection(section);
      }
    };

    return fetchData(url, section);

  };

  fetchHomeworld = async (section, homeworldURL) => {
    try {
      const response = await fetch(homeworldURL);

      if(!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      const homeworld = data.name;

      this.setState((state) => ({
        [section]: {
          ...state[section],
          homeworld: homeworld
        }
      }));

    } catch (err) {
      console.log(err);
    }

  };

  displaySection = (section) => {

    const displayListItem = (section, detail, property) => {
      return (
        <Fragment>
          { `${detail}: ${this.state[section][property]}` }
        </Fragment>
      );
    };

    const displayListItems = (section) => {
      switch (section) {
        case 'films':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Directed by', 'director')}
              </li>
              <li>
                { displayListItem(section, 'Produced by', 'producer')}
              </li>
              <li>
                { displayListItem(section, 'Released', 'release_date')}
              </li>
            </Fragment>
          );
        case 'vehicles':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Model', 'model')}
              </li>
              <li>
                { displayListItem(section, 'Manufacturer', 'manufacturer')}
              </li>
              <li>
                { displayListItem(section, 'Crew', 'crew')}
              </li>
            </Fragment>
          );
        case 'starships':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Model', 'model')}
              </li>
              <li>
                { displayListItem(section, 'Manufacturer', 'manufacturer')}
              </li>
              <li>
                { displayListItem(section, 'Crew', 'crew')}
              </li>
            </Fragment>
          );
        case 'planets':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Climate', 'climate')}
              </li>
              <li>
                { displayListItem(section, 'Terrain', 'terrain')}
              </li>
              <li>
                { displayListItem(section, 'Population', 'population')}
              </li>
            </Fragment>
          );
        case 'species':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Classification', 'episode_id')}
              </li>
              <li>
                { displayListItem(section, 'Average Lifespan', 'episode_id')}
              </li>
              <li>
                { displayListItem(section, 'Homeworld', 'homeworld')}
              </li>
            </Fragment>
          );
        case 'people':
          return (
            <Fragment>
              <li>
                { displayListItem(section, 'Birth Year', 'birth_year')}
              </li>
              <li>
                { displayListItem(section, 'Homeworld', 'homeworld')}
              </li>
              <li>
                { displayListItem(section, 'Gender', 'gender')}
              </li>
            </Fragment>
          );
        default:
          break;
      }
    };
    let sectionItem = this.state[section].title || this.state[section].name;

    return (
      <Fragment>
        <h3>{sectionItem}</h3>
        <ul>
          {displayListItems(section)}
        </ul>
        <Link
          className='home__section'
          to={{
            pathname: `/${section}/${sectionItem}`,
            state: {[section]: this.state[section]}
          }} >See more</Link>
      </Fragment>
    )
  };

  render() {
    const sections = ['Films', 'People', 'Planets', 'Species', 'Vehicles', 'Starships'];

    return (
      <div className='home-main'>
        <h2 className='home-main__title'>Star Wars API Example</h2>
        {
          sections.map((section) => {
            return (
              <div key={section} className='home__sections'>
                <h2>{section}</h2>
                <Fragment>
                  {this.displaySection(section.toLowerCase())}
                </Fragment>
              </div>
            )

          })
        }
      </div>
    )
  }
};
