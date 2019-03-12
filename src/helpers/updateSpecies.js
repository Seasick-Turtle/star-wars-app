// helper function used to replace the url from being displayed
// returns the actual name of the species instead
export const updateSpecies = async data => {
  return Promise.all(data.map(url =>
  fetch(url)
    .then(resp => resp.json())
    .then(speciesData => {
      return speciesData.name
    })
  ));
};
