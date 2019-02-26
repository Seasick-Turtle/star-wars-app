export const hasOneDayPassed = () => {
  // create new Date object/string for comparison
  let date = new Date().toLocaleDateString();

  // should fetchDataDate match with the current date
  // return false, do nothing
  if (localStorage.fetchDataDate === date && localStorage.length === 7) {
    return false;
  }

  // otherwise return true and set fetchAllCategoriesDate to
  // current day
  localStorage.fetchDataDate = date;
  return true;
};