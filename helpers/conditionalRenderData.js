// Used for taking in numerical strings,
// adds commas in the appropriate places and adds a suffix
// ex data = 123,456 str = tons, result => 123,456 tons
export const conditionalRenderData = (data, str) => {
	if (data === 'NaN') return 'unknown';

	return data === 'unknown'
		? data
		: `${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${str}`;
};
