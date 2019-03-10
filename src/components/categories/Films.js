import React, {Fragment, useState, useEffect} from 'react';
import '../../styles/sections.scss';
import {Link} from 'react-router-dom';

const Films = film => {

  const [toggleCharacter, setToggleCharacter] = useState(false);
  const [toggleSpecies, setToggleSpecies] = useState(false);
  const [togglePlanets, setTogglePlanets] = useState(false);
  const [toggleStarships, setToggleStarships] = useState(false);
  const [toggleVehicles, setToggleVehicles] = useState(false);

  const vehicleVisibility = () => {
    setToggleVehicles(!toggleVehicles);
  } ;

  const displayVehicles = vehicles => {

    if (vehicles.length > 0 && !toggleVehicles) {

      return (
        <Fragment>
          <strong>Vehicles:</strong>
          <button onClick={vehicleVisibility}>Show/Hide</button>
          <ul>
            {filmData.vehicles.map(vehicle => {
              return (
                <li key={vehicle.id}>{vehicle.name}</li>
              )
            })}
          </ul>
        </Fragment>
      )
    } else if (toggleVehicles) {
      return (
        <Fragment>
          <strong>Vehicles:</strong>
          <button onClick={vehicleVisibility}>Show/Hide</button>
          <ul></ul>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <strong>Vehicles:</strong>
          <p>No data available</p>
        </Fragment>
      );
    }
  };

  const filmData = film.location.state.film;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2 className='section__title'>
          {filmData.title}
        </h2>
        <p>
          <strong>Episode:</strong>
          {filmData.episode_id}
        </p>
        <p>
          <strong>Director:</strong>
          {filmData.director}
        </p>
        <p>
          <strong>Producer:</strong>
          {filmData.producer}
        </p>
        <p>
          <strong>Release Date:</strong>
          {filmData.release_date}
        </p>
        <p>
          <strong>Opening Crawl:</strong>
        </p>
        <p>
          {filmData.opening_crawl}
        </p>

        <strong>Characters</strong>
        {
          <ul>
            {filmData.people.map(person => {
              return (
                <li key={person.id}>{person.name}</li>
              )
            })
            }
          </ul>
        }

        <strong>Featured species:</strong>
        <ul>
        {filmData.species.map(specie => {
          return (
            <li key={specie.id}>{specie.name}</li>
          )
        })}
        </ul>
        <strong>Planets:</strong>
        <ul>
          {filmData.planets.map(planet => {
            return (
              <li key={planet.id}>{planet.name}</li>
            )
          })}
        </ul>
        <strong>Starships:</strong>
        <ul>
          {filmData.starships.map(starship => {
            return (
              <li key={starship.id}>{starship.name}</li>
            )
          })}
        </ul>
        {
          displayVehicles(filmData.vehicles)
        }

      </section>
    </main>
  )
};

export default Films;