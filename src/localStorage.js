export const loadState = (section) => {
  try {
    const serializedState = localStorage.getItem(section);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};

export const saveState =  (section, state) => {
  try {
    const serializedState =  JSON.stringify(state);
    return  localStorage.setItem(section, serializedState);
  } catch (err) {
    console.log(err);
  }
};