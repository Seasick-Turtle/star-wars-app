import React from 'react';
import '../styles/Movies.css';

const Films = ({ films }) => {

  return (
    <section className='films col-1'>
      <h3>
        Films component
      </h3>
      {/*{*/}
        {/*films.map(film => {*/}
          {/*return <p key={film.title}>{film.title}</p>*/}
        {/*})*/}
      {/*}*/}
    </section>
  )
};

export default Films;