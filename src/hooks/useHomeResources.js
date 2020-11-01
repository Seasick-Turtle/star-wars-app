import { useState, useEffect } from 'react';
import { loadState, saveState } from '../localStorage';
import { hasOneDayPassed } from '../helpers/hasOneDayPassed';
import { updateHomeworld } from '../helpers/updateHomeworld';
import { updateSpecies } from '../helpers/updateSpecies';

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
  const [isLoading, setIsLoading] = useState(false);
  const resourceIndex = getRandomIndex(resource);
  let newIndex;

  useEffect(() => {
    setIsLoading(true);

    (async resource => {
      // checks if the date has changed
      // if so, create new API calls
      if (hasOneDayPassed()) {
        let response = await fetch(`https://swapi.dev/api/${resource}/${resourceIndex}/`, {
          mode: 'cors'
        });

        // if API call fails, try again
        while (!response.ok) {
          newIndex = getRandomIndex(resource);
          response = await fetch(`https://swapi.dev/api/${resource}/${newIndex}/`, {
            mode: 'cors'
          });
        }

        const data = await response.json();

        //use to replace the homeworld url with the planet name
        if (data.homeworld) {
          data.homeworld = await updateHomeworld(data.homeworld);
        }

        if (data.species) {
          data.species = await updateSpecies(data.species);
        }

        await setResources(data);
        await saveState(resource, data);
        await setIsLoading(false);
      } else {
        // if its the same day, just load
        // data from local storage
        await setResources(loadState(resource));
        await setIsLoading(false);
      }

    })(resource);

  }, [resource]);


  return { resources, isLoading };

};

export default useHomeResources;