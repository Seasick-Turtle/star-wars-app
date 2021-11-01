import { useState } from 'react';

const DisplayCharacters = ({ characters }) => {
	// hook to set visibility of character box
	const [toggleCharacters, setToggleCharacters] = useState(false);

	// toggles and sets visibility
	const characterVisibility = () => {
		setToggleCharacters(!toggleCharacters);
	};

	if (toggleCharacters) {
		return (
			<section>
				<strong>Characters </strong>
				<button onClick={characterVisibility}>Show/Hide</button>
				{
					<ul className="categories__scroll">
						{characters.map((person) => {
							return <li key={person.id}>{person.name}</li>;
						})}
					</ul>
				}
			</section>
		);
	} else {
		return (
			<section>
				<strong>Characters </strong>
				<button onClick={characterVisibility}>Show/Hide</button>
			</section>
		);
	}
};

export default DisplayCharacters;
