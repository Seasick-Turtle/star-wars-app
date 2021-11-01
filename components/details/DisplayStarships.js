import { useState } from 'react';

const DisplayStarships = (starships) => {
	// hook to set visibility of starships box
	const [toggleStarships, setToggleStarships] = useState(false);

	// toggles and sets visibility
	const starshipsVisibility = () => {
		setToggleStarships(!toggleStarships);
	};

	// if toggleStarships is true, show the scroll box
	// otherwise return just the category/button only
	if (toggleStarships) {
		return (
			<section>
				<strong>Starships </strong>
				<button onClick={starshipsVisibility}>Show/Hide</button>
				<ul className="categories__scroll">
					{starships.starships.map((starship) => {
						return <li key={starship.id}>{starship.name}</li>;
					})}
				</ul>
			</section>
		);
	} else {
		return (
			<section>
				<strong>Starships </strong>
				<button onClick={starshipsVisibility}>Show/Hide</button>
			</section>
		);
	}
};

export default DisplayStarships;
