import React from 'react';
import '../styles/Characters.css';

const People = ({ people }) => {
  return (
    <section className='characters col-3'>
      <h3>
        People component
      </h3>
      {/*{*/}
        {/*people.map(person => {*/}
          {/*return <p key={person.name}>{person.name}</p>*/}
        {/*})*/}
      {/*}*/}
    </section>
  )
};

export default People;