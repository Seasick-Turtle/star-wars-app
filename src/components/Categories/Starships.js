import React from 'react';
import '../../styles/sections.css';
import {Link} from 'react-router-dom';

const Starships = ( starship ) => {
  const starshipData = starship.location.state.starships;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2>{starshipData.name}</h2>
        <p><strong>Crew:</strong> {starshipData.crew}</p>
        <p><strong>Passengers:</strong> {starshipData.passengers}</p>
        <p><strong>Model:</strong> {starshipData.model}</p>
        <p><strong>Consumables:</strong> {starshipData.consumables}</p>
        <p><strong>Cargo Capacity:</strong> {starshipData.cargo_capacity}</p>
        <p><strong>Hyperdrive Rating:</strong> {starshipData.hyperdrive_rating}</p>
        <p><strong>Manufacturer:</strong> {starshipData.manufacturer}</p>
        <p><strong>Starship Class:</strong> {starshipData.starship_class}</p>
        <p><strong>Cost (In Credits):</strong> {starshipData.cost_in_credits}</p>

      </section>
    </main>
  )
};

export default Starships;