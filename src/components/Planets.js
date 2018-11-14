import React from 'react';
import '../styles/Planets.css';
import {Link} from 'react-router-dom';

const Planets = (planet) => {
  const planetData = planet.location.state.planets;

  return (
    <main>
      <section className='planets'>
        <Link to='/'>Back</Link>
        <h2>{planetData.name}</h2>
        <p><strong>Climate:</strong> {planetData.climate}</p>
        <p><strong>Population:</strong> {planetData.population}</p>
        <p><strong>Terrain:</strong> {planetData.terrain}</p>
        <p><strong>Rotation Period:</strong> {planetData.rotation_period}</p>
        <p><strong>Orbital Period:</strong> {planetData.orbital_period}</p>
      </section>
    </main>
    )
};

export default Planets;