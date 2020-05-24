export const getRandomJoke = async params => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?${searchParams.toString()}`
  );
  const data = await response.json();
  return [data];
};

export const searchJokes = async params => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?${searchParams.toString()}`
  );
  const data = await response.json();
  return data.result;
};

export const getCategories = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const data = await response.json();
  return data;
};
