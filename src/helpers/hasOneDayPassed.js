export const hasOneDayPassed = () => {
  // create new Date object/string for comparison
  let date = new Date().toLocaleDateString();

  // should storageDate match with the current date
  // return false, do nothing
  if (localStorage.storageDate === date && localStorage.length >= 6) {
    return false;
  }

  // otherwise return true and set storageDate to
  // current day
  localStorage.clear();
  localStorage.storageDate = date;
  return true;
};