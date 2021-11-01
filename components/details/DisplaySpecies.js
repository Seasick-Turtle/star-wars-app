import { useState } from 'react';

// hook to set visibility of Species box
const DisplaySpecies = (species) => {
	const [toggleSpecies, setToggleSpecies] = useState(false);

	// toggles and sets visibility
	const speciesVisibility = () => {
		setToggleSpecies(!toggleSpecies);
	};

	// if toggleSpecies is true, show the scroll box
	// otherwise return just the category/button only
	const speciesList = species.species;

	if (toggleSpecies) {
		return (
			<section>
				<strong>Species </strong>
				<button onClick={speciesVisibility}>Show/Hide</button>
				{
					<ul className="categories__scroll">
						{speciesList.map((specie) => {
							return <li key={specie.id}>{specie.name}</li>;
						})}
					</ul>
				}
			</section>
		);
	} else {
		return (
			<section>
				<strong>Species </strong>
				<button onClick={speciesVisibility}>Show/Hide</button>
			</section>
		);
	}
};

export default DisplaySpecies;
