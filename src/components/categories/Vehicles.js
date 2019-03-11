import React from 'react';
import { Link } from 'react-router-dom';
import {conditionalRenderData} from '../../helpers/conditionalRenderData';

const Vehicles = vehicle => {
  const vehicleData = vehicle.vehicle.resource;

  return (
    <main>
      <section className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {vehicleData.name}
        </h2>
        <p>
          <strong>Crew: </strong>
          {conditionalRenderData(vehicleData.crew, '')}
        </p>
        <p>
          <strong>Passengers: </strong>
          {conditionalRenderData(vehicleData.passengers, '')}
        </p>
        <p>
          <strong>Model: </strong>
          {vehicleData.model}
        </p>
        <p>
          <strong>Consumables: </strong>
          {`${conditionalRenderData(vehicleData.consumables, '')}`}
        </p>
        <p>
          <strong>Cargo Capacity: </strong>
          {conditionalRenderData(vehicleData.cargo_capacity, 'tons')}
        </p>
        <p>
          <strong>Max Atmosphering Speed: </strong>
          {conditionalRenderData(vehicleData.max_atmosphering_speed, 'kph')}
        </p>
        <p>
          <strong>Manufacturer: </strong>
          {vehicleData.manufacturer}
        </p>
        <p>
          <strong>Vehicle Class: </strong>
          {vehicleData.vehicle_class}
        </p>
        <p>
          <strong>Cost (In Credits): </strong>
          {conditionalRenderData(vehicleData.cost_in_credits, '')}
        </p>
      </section>
    </main>
  )
};

export default Vehicles;