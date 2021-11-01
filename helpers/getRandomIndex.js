const getRandomIndex = (resource) => {
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

	return Math.floor(Math.random() * (max - MIN + 1));
};

export default getRandomIndex;
