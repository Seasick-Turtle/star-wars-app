import React from 'react';
import { Link } from 'react-router-dom';
import DisplayCharacters from '../details/DisplayCharacters';
import DisplayStarships from '../details/DisplayStarships';
import DisplayPlanets from '../details/DisplayPlanets';
import DisplaySpecies from '../details/DisplaySpecies';
import DisplayVehicles from '../details/DisplayVehicles';

const Films = film => {

  let filmData = film.film.film || film.location.state.film;

  return (
    <main>
      <div className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {filmData.title}
        </h2>
        <p>
          <strong>Episode: </strong>
          {filmData.episode_id}
        </p>
        <p>
          <strong>Director: </strong>
          {filmData.director}
        </p>
        <p>
          <strong>Producer: </strong>
          {filmData.producer}
        </p>
        <p>
          <strong>Release Date: </strong>
          {filmData.release_date}
        </p>
        <p>
          <strong>Opening Crawl: </strong>
        </p>
        <p>
          {filmData.opening_crawl}
        </p>

        <DisplayCharacters
          characters={filmData.people}
        />
        <br/>
        <DisplayPlanets
          planets={filmData.planets}
        />
        <br/>
        <DisplayStarships
          starships={filmData.starships}
        />
        <br/>
        <DisplaySpecies
          species={filmData.species}
        />
        <br/>
        <DisplayVehicles
          vehicles={filmData.vehicles}
        />
      </div>
    </main>
  )
};

export default Films;