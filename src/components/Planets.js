import React from 'react';
import '../styles/Planets.css';
import {Link} from 'react-router-dom';

const Planets = (planet) => {
  const planetData = planet.location.state.planets;

  return (
    <main>
      <section className='planets'>
        <Link to='/'>Back</Link>
        <h3>{planetData.name}</h3>
        <p>Climate: {planetData.climate}</p>
        <p>Population: {planetData.population}</p>
        <p>Terrain: {planetData.terrain}</p>
        <p>Rotation Period: {planetData.rotation_period}</p>
        <p>Orbital Period: {planetData.orbital_period}</p>
      </section>
    </main>

    )

};

export default Planets;