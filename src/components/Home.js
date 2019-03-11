import React from 'react';
import HomePreview from './categories/HomePreview';

const Home = () => {

  const categories = ['People', 'Planets', 'Species', 'Vehicles', 'Starships'];

  return (
    <div className='home-main'>
      <h2 className='home-main__title'>Star Wars API App</h2>
      {
        categories.map((category) => {
          return (
            <div key={category} className='home__categories'>
              <h2 className='home__categories-title'>{category}</h2>
                <HomePreview resource={category.toLowerCase()} />
            </div>
          )
        })
      }
    </div>
  )
};

export default Home;