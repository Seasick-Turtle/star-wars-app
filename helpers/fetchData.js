import { useState, useEffect } from 'react';
import getRandomIndex from './getRandomIndex';
import { hasOneDayPassed } from './hasOneDayPassed';
import { updateHomeworld } from './updateHomeworld';
import { updateSpecies } from './updateSpecies';
import { saveState, loadState } from '../localStorage';

export const fetchData = (category) => {
	const [resources, setResources] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const resourceIndex = getRandomIndex(category);
	let newIndex;

	useEffect(() => {
		setIsLoading(true);

		(async (category) => {
			// checks if the date has changed
			// if so, create new API calls
			if (hasOneDayPassed()) {
				let response = await fetch(
					`https://swapi.dev/api/${category}/${resourceIndex}/`,
					{
						mode: 'cors',
					}
				);

				// if API call fails, try again
				while (!response.ok) {
					newIndex = getRandomIndex(category);
					response = await fetch(
						`https://swapi.dev/api/${category}/${newIndex}/`,
						{
							mode: 'cors',
						}
					);
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
				await saveState(category, data);
				await setIsLoading(false);
			} else {
				// if its the same day, just load
				// data from local storage
				await setResources(loadState(category));
				await setIsLoading(false);
			}
		})(category);
	}, [category]);

	return { resources, isLoading };
};

export default fetchData;
