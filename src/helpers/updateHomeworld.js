// helper function used to replace the url from being displayed
// returns the actual name of the planet instead
export const updateHomeworld = async data => {
  const response = await fetch(data, {
    mode: 'cors'
  });

  const homeworldData = await response.json();

  return homeworldData.name;
};
