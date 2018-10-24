import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const sections = ['Films', 'People', 'Planets', 'Species', 'Vehicles'];

  return(
    <div className='home-main'>
      <h2 className='home-main__title'>Home Component</h2>
      {
        sections.map((section) => {
          return(
            <div key={section} className='home__films'>
              <h3>{section}</h3>
              <div>
                <h2>Lots of content goes here!</h2>
              </div>
            </div>
            )

        })
      }
    </div>
  )
};

export default Home;