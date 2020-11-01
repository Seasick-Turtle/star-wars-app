import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import PlanetImages from '../../helpers/planets';

const Planets = (planet) => {

  const planetData = planet.planet.resource;
  const planetName = planetData.name === 'Yavin IV' ? 'Yavin' : planetData.name;

  return (
    <main>
      <section className='categories__component categories__component__planet'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {planetData.name}
        </h2>
        <img className="categories__component__planet-img" src={PlanetImages[planetName]} />
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