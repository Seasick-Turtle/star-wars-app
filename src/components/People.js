import React from 'react';
import '../styles/Characters.css';

const People = ({ people }) => {
  return (
    <section className='characters col-3'>
      <h3>
        People component
      </h3>
      {
        people.map(person => {
          return <p>{person.name}</p>
        })
      }
    </section>
  )
};

export default People;