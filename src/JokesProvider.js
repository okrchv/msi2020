import React, { createContext, useState } from "react";

export const JokesContext = createContext();

export const JokesProvider = ({ children }) => {
  const [jokes, setJokes] = useState({});

  const getJokes = jokeIds => jokeIds.map(id => jokes[id]);

  const cacheJokes = jokes =>
    setJokes(prevJokes =>
      jokes.reduce(
        (prevJokes, joke) => Object.assign(prevJokes, { [joke.id]: joke }),
        prevJokes
      )
    );

  const contextValue = {
    getJokes,
    cacheJokes
  };

  return (
    <JokesContext.Provider value={contextValue}>
      {children}
    </JokesContext.Provider>
  );
};
