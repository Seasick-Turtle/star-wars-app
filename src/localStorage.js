export const loadState = (section) => {
  try {
    const serializedState =  localStorage.getItem(section);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (section, state) => {
  try {
    const serializedState = await JSON.stringify(state);
    console.log(serializedState);
    return await localStorage.setItem(section, serializedState);
  } catch (err) {
    console.log(err);
  }
};