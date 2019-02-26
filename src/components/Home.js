import React, { Fragment, useState, useEffect } from 'react';
import HomePreview from './categories/HomePreview';
import '../styles/Home.scss';

const Home = () => {

  const [film, setFilm] = useState({});
  const [person, setPerson] = useState({});
  const [planet, setPlanet] = useState({});
  const [specie, setSpecie] = useState({});
  const [vehicle, setVehicle] = useState({});
  const [starship, setStarships] = useState({});

  const categories = ['Films', 'People', 'Planets', 'Species', 'Vehicles', 'Starships'];

  return (
    <div className='home-main'>
      <h2 className='home-main__title'>Star Wars API Example</h2>
      {
        categories.map((category) => {
          return (
            <div key={category} className='home__categories'>
              <h2>{category}</h2>
              <Fragment>
                <HomePreview resource={category.toLowerCase()} />
              </Fragment>
            </div>
          )
        })
      }
    </div>
  )
};

export default Home;