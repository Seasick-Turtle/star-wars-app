import React from 'react';
import '../../styles/sections.css';
import {Link} from 'react-router-dom';

const People = (person) => {
  const personData = person.location.state.people;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2>{personData.name}</h2>
        <p><strong>Birth Date:</strong> {personData.birth_year}</p>
        <p><strong>Gender:</strong> {personData.gender}</p>
        <p><strong>Height:</strong> {personData.height}</p>
        <p><strong>Mass:</strong> {personData.mass}</p>
        <p><strong>Eye Color:</strong> {personData.eye_color}</p>
        <p><strong>Hair Color:</strong> {personData.hair_color}</p>
        <p><strong>Skin Color:</strong> {personData.skin_color}</p>
        <p><strong>Species:</strong> {personData.species}</p>
        <p><strong>Homeworld:</strong> {personData.homeworld}</p>
      </section>
    </main>
  )
};

export default People;