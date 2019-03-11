import React from 'react';
import { Link } from 'react-router-dom';
import {conditionalRenderData} from '../../helpers/conditionalRenderData';

const People = person => {

  const personData = person.person.resource;

  return (
    <main>
      <section className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {personData.name}
        </h2>
        <p>
          <strong>Birth Date: </strong>
          {personData.birth_year}
        </p>
        <p>
          <strong>Gender: </strong>
          {personData.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {
            conditionalRenderData((personData.height * .01).toFixed(2), 'meters')
          }
        </p>
        <p>
          <strong>Mass: </strong>
          {
            conditionalRenderData(personData.mass, 'kilograms')
          }
        </p>
        <p>
          <strong>Eye Color: </strong>
          {personData.eye_color}
        </p>
        <p>
          <strong>Hair Color: </strong>
          {personData.hair_color}
        </p>
        <p>
          <strong>Skin Color: </strong>
          {personData.skin_color}
        </p>
        <p>
          <strong>Species: </strong>
          {personData.species}
        </p>
        <p>
          <strong>Homeworld: </strong>
          {personData.homeworld}
        </p>
      </section>
    </main>
  )
};

export default People;