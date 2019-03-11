import React from 'react';
import {Link} from 'react-router-dom';
import {conditionalRenderData} from '../../helpers/conditionalRenderData';

const Planets = (planet) => {

  const planetData = planet.planet.resource;

  return (
    <main>
      <section className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {planetData.name}
        </h2>
        <p>
          <strong>Climate: </strong>
          {planetData.climate}
        </p>
        <p>
          <strong>Population: </strong>
          {
            conditionalRenderData(planetData.population, '')
          }
        </p>
        <p>
          <strong>Gravity: </strong>
          {planetData.gravity}
        </p>
        <p>
          <strong>Terrain: </strong>
          {planetData.terrain}
        </p>
        <p>
          <strong>Rotation Period: </strong>
          {
            conditionalRenderData(planetData.rotation_period, 'standard hours')
          }
        </p>
        <p>
          <strong>Orbital Period: </strong>
          {
            conditionalRenderData(planetData.orbital_period, 'standard hours')
          }
        </p>
      </section>
    </main>
    )
};

export default Planets;