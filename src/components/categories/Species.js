import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {conditionalRenderData} from '../../helpers/conditionalRenderData';
import Films from './Films';

const Species = species => {
  const speciesData = species.species.resource;

  return (
    <main>
      <section className='categories__component'>
        <Link to='/'>Back</Link>
        <h2 className='categories__title'>
          {speciesData.name}
        </h2>
        <p>
          { speciesData.homeworld === null
          ? '' : <strong>Homeworld: </strong> }
          {speciesData.homeworld}
        </p>
        <p>
          <strong>Designation: </strong>
          {speciesData.designation}
        </p>
        <p>
          <strong>Language: </strong>
          {speciesData.language}
        </p>
        <p>
          <strong>Classification: </strong>
          {speciesData.classification}
        </p>
        <p>
          <strong>Average Lifespan: </strong>
          {
            conditionalRenderData(speciesData.average_lifespan, 'standard years')
          }
        </p>
        <p>
          <strong>Average Height: </strong>
          {
            conditionalRenderData((speciesData.average_height * .01).toFixed(2), 'meters')
          }
        </p>
        <p>
          <strong>Eye Color: </strong>
          {speciesData.eye_colors}
        </p>
        <p>
          <strong>Hair Color: </strong>
          {speciesData.hair_colors}
        </p>
        <p>
          <strong>Skin Color: </strong>
          {speciesData.skin_colors}
        </p>
      </section>
    </main>
  )
};

export default Species;