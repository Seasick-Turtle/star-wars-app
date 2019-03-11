import React, { useState } from 'react';

const DisplayPlanets = planets => {

  // hook to set visibility of planets box
  const [togglePlanets, setTogglePlanets] = useState(false);

  // toggles and sets visibility
  const planetsVisibility = () => {
    setTogglePlanets(!togglePlanets);
  };

  const planetList = planets.planets;

  // if togglePlanets is true, show the scroll box
  // otherwise return just the category/button only
  if (togglePlanets) {
    return (
      <section>
        <strong>Planets </strong>
        <button onClick={planetsVisibility}>Show/Hide</button>
        {
          <ul className='categories__scroll'>
            {planetList.map(planet => {
              return (
                <li key={planet.id}>{planet.name}</li>
              )
            })
            }
          </ul>
        }
      </section>
    )
  } else {
    return (
      <section>
        <strong>Planets </strong>
        <button onClick={planetsVisibility}>Show/Hide</button>
      </section>
    )
  }
};

export default DisplayPlanets;