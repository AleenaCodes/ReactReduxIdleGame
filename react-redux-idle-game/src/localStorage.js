export const loadState = () => {
  try { //Used as the calls will fail sometimes depending on user privacy settings
    const serialisedState = localStorage.getItem('state');

    if(serialisedState == null) {
      return undefined;
    }

    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (err) {
    // Ignore errors
  }
};
