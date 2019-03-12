import React from 'react';
import {Link} from 'react-router-dom';
import {conditionalRenderData} from '../../helpers/conditionalRenderData';

const Starships = starship => {
  const starshipData = starship.starship.resource;

  return (
    <main>
      <section className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>{
          starshipData.name}
        </h2>
        <p>
          <strong>Crew: </strong>
          {
            conditionalRenderData(starshipData.crew, '')
          }
        </p>
        <p>
          <strong>Passengers: </strong>
          {
            conditionalRenderData(starshipData.passengers, '')
          }
        </p>
        <p>
          <strong>Model: </strong>
          {starshipData.model}
        </p>
        <p>
          <strong>Consumables: </strong>
          {
            conditionalRenderData(starshipData.consumables, '')
          }
        </p>
        <p>
          <strong>Cargo Capacity: </strong>
          {
            conditionalRenderData(starshipData.cargo_capacity, 'tons')
          }
        </p>
        <p>
          <strong>Hyperdrive Rating: </strong>
          {starshipData.hyperdrive_rating}
        </p>
        <p>
          <strong>Manufacturer: </strong>
          {starshipData.manufacturer}
        </p>
        <p>
          <strong>Starship Class: </strong>
          {starshipData.starship_class}
        </p>
        <p>
          <strong>Cost (In Credits): </strong>
          {
            conditionalRenderData(starshipData.cost_in_credits, '')
          }
        </p>

      </section>
    </main>
  )
};

export default Starships;