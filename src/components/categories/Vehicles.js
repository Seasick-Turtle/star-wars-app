import React from 'react';
import '../../styles/sections.scss';
import {Link} from 'react-router-dom';

const Vehicles = (vehicle) => {
  const vehicleData = vehicle.location.state.resource;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2 className='section__title'>
          {vehicleData.name}
        </h2>
        <p>
          <strong>Crew:</strong>
          {vehicleData.crew}
        </p>
        <p>
          <strong>Passengers:</strong>
          {vehicleData.passengers}
        </p>
        <p>
          <strong>Model:</strong>
          {vehicleData.model}
        </p>
        <p>
          <strong>Consumables:</strong>
          {vehicleData.consumables}
        </p>
        <p>
          <strong>Cargo Capacity:</strong>
          {vehicleData.cargo_capacity}
        </p>
        <p>
          <strong>Max Atmosphering Speed:</strong> {vehicleData.max_atmosphering_speed}
        </p>
        <p>
          <strong>Manufacturer:</strong>
          {vehicleData.manufacturer}
        </p>
        <p>
          <strong>Vehicle Class:</strong>
          {vehicleData.vehicle_class}
        </p>
        <p>
          <strong>Cost (In Credits):</strong> {vehicleData.cost_in_credits}
        </p>

      </section>
    </main>
  )
};

export default Vehicles;