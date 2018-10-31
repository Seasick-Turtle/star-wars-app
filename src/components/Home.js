import React, {Component} from 'react';
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
    this.retrieveAllSections(['films', 'people', 'planets', 'species', 'vehicles', 'starships']);
  }

  retrieveAllSections(sections) {
    for (let i = 0; i < sections.length; i++) {
      this.retrieveSection(sections[i]);
    }
  }

  retrieveSection = (section) => {
    /*
     * function used to generate a random value
     * between 1 and the max number in each category
     */
    function getRandomSection (section)  {

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

    }

    let sectionNum = getRandomSection(section);
    const url = `https://swapi.co/api/${section}/${sectionNum}`;

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

        this.setState({
          [section]: data
        });

      } catch (err) {
        console.log('trying again for: ' + section);
        return await this.retrieveSection(section);
      }
    };


    fetchData(url, section);

  };

  displaySection = (section) => {
    return (
      <React.Fragment>
        <h3>{this.state[section].title || this.state[section].name}</h3>
        <ul>
          <li>
            {
              this.state[section].episode_id
          || this.state[section].model
          || this.state[section].rotation_period
          || this.state[section].classification
          || this.state[section].birth_year
            }</li>
          <li></li>
          <li></li>
        </ul>
        <a href='#'>More Info</a>
      </React.Fragment>
    )
  };

  render() {
    const sections = ['Films', 'People', 'Planets', 'Species', 'Vehicles', 'Starships'];

    return (
      <div className='home-main'>
        <h2 className='home-main__title'>Home Component</h2>
        {
          sections.map((section) => {
            return (
              <div key={section} className='home__sections'>
                <h2>{section}</h2>
                <React.Fragment>
                  {this.displaySection(section.toLowerCase())}
                </React.Fragment>
              </div>
            )

          })
        }
      </div>
    )
  }
};
