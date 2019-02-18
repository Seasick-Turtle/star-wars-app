import { useState, useEffect } from 'react';
import { saveState } from '../localStorage';

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

const useHomeResources = resource => {

  const [resources, setResources] = useState({});
  const resourceIndex = getRandomIndex(resource);

  useEffect(() => {
    (async resource => {

      const response = await fetch(`https://swapi.co/api/${resource}/${resourceIndex}/`);

      if(!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      await setResources(data);
      await saveState(resource, data);


    })(resource);

  }, [resource]);

  return resources;
};

export default useHomeResources;