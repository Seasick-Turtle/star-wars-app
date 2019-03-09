import React from 'react';
import '../../styles/sections.scss';
import {Link} from 'react-router-dom';

const Planets = (planet) => {
  const planetData = planet.location.state.resource;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2 className='section__title'>{planetData.name}</h2>
        <p><strong>Climate:</strong> {planetData.climate}</p>
        <p><strong>Population:</strong> {planetData.population}</p>
        <p><strong>Gravity:</strong> {planetData.gravity}</p>
        <p><strong>Terrain:</strong> {planetData.terrain}</p>
        <p><strong>Rotation Period:</strong> {planetData.rotation_period}</p>
        <p><strong>Orbital Period:</strong> {planetData.orbital_period}</p>
      </section>
    </main>
    )
};

export default Planets;