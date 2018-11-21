import React from 'react';
import {Link} from 'react-router-dom';

const Films = (film) => {
  const filmData = film.location.state.films;
  console.log(filmData);

  return (
    <main>
      <section className='section__component'>
        <Link to='/'>Back</Link>
        <h2>{filmData.title}</h2>
        <p><strong>Episode:</strong> {filmData.episode_id}</p>
        <p><strong>Director:</strong> {filmData.director}</p>
        <p><strong>Producer:</strong> {filmData.producer}</p>
        <p><strong>Release Date:</strong> {filmData.release_date}</p>
        <p><strong>Opening Crawl:</strong> {filmData.opening_crawl}</p>
      </section>
    </main>
  )
};

export default Films;