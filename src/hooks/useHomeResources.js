import { useState, useEffect } from 'react';
import { loadState, saveState } from '../localStorage';
import { hasOneDayPassed } from '../helpers/hasOneDayPassed';

// Generates a random value for the API call
const getRandomIndex = resource => {
  const MIN = 1;
  let max;

  switch (resource) {
    case 'films':
      max = 7;
      break;
    case 'people':
      max = 87;
      break;
    case 'planets':
      max = 61;
      break;
    case 'species':
      max = 37;
      break;
    case 'vehicles':
      max = 39;
      break;
    case 'starships':
      max = 37;
      break;
    default:
      break;
  }

  return (Math.floor(Math.random() * (max - MIN + 1)));
};

/*
* Custom React hook that uses API calls with
* getRandomIndex to retrieve random data to
* display on the Home component
*/
const useHomeResources = resource => {

  const [resources, setResources] = useState({});
  const resourceIndex = getRandomIndex(resource);
  let newIndex;


    useEffect(() => {

      (async resource => {
        // checks if the date has changed
        // if so, create new API calls
        if (hasOneDayPassed()) {
          let response = await fetch(`https://swapi.co/api/${resource}/${resourceIndex}/`);

          // if API call fails, try again
          while(!response.ok) {
            newIndex = getRandomIndex(resource);
            response = await fetch(`https://swapi.co/api/${resource}/${newIndex}/`);
          }

          const data = await response.json();

          await setResources(data);
          await saveState(resource, data);
        } else {
          // if its the same day, just load
          // data from local storage
          setResources(loadState(resource));
        }

      })(resource);

    }, [resource]);

    return resources;

};

export default useHomeResources;