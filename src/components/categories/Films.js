import React from 'react';
import '../../styles/sections.scss';
import {Link} from 'react-router-dom';

const Films = (film) => {
  const filmData = film.location.state.resource;

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2 className='section__title'>{filmData.title}</h2>
        <p><strong>Episode:</strong> {filmData.episode_id}</p>
        <p><strong>Director:</strong> {filmData.director}</p>
        <p><strong>Producer:</strong> {filmData.producer}</p>
        <p><strong>Release Date:</strong> {filmData.release_date}</p>
        <p><strong>Opening Crawl:</strong></p>
        <p>{filmData.opening_crawl}</p>
        <strong>Featured species:</strong>
        <ul className='section__species'>
        {filmData.species.map(specie => {
          return (
            <li>{specie}</li>
          )
        })}
        </ul>
      </section>
    </main>
  )
};

export default Films;