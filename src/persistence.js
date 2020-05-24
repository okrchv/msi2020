export const hydrate = (key, defaultValue) => {
  return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
};

export const persist = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};
