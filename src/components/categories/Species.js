import React from 'react';
import '../../styles/sections.scss';
import {Link} from 'react-router-dom';

const Species = ( species ) => {
  const speciesData = species.location.state.resource;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2 className='section__title'>{speciesData.name}</h2>
        <p><strong>Homeworld:</strong> {speciesData.homeworld}</p>
        <p><strong>Designation:</strong> {speciesData.designation}</p>
        <p><strong>Language:</strong> {speciesData.language}</p>
        <p><strong>Classification:</strong> {speciesData.classification}</p>
        <p><strong>Average Lifespan:</strong> {speciesData.average_lifespan}</p>
        <p><strong>Average Height:</strong> {speciesData.average_height}</p>
        <p><strong>Eye Color:</strong> {speciesData.eye_colors}</p>
        <p><strong>Hair Color:</strong> {speciesData.hair_colors}</p>
        <p><strong>Skin Color:</strong> {speciesData.skin_colors}</p>
      </section>
    </main>
  )
};

export default Species;