import React, { createContext, useState, useEffect } from "react";

import * as persistence from "./persistence";

const LOCAL_STORAGE_KEY = "jokes";

export const JokesContext = createContext();

export const JokesProvider = ({ children }) => {
  const [jokes, setJokes] = useState(
    persistence.hydrate(LOCAL_STORAGE_KEY, {})
  );

  useEffect(() => {
    persistence.persist(LOCAL_STORAGE_KEY, jokes);
  }, [jokes]);

  const getJokes = (jokeIds) => jokeIds.map((id) => jokes[id]);

  const cacheJokes = (jokes) =>
    setJokes((prevJokes) =>
      jokes.reduce(
        (prevJokes, joke) => ({ ...prevJokes, [joke.id]: joke }),
        prevJokes
      )
    );

  const contextValue = {
    getJokes,
    cacheJokes,
  };

  return (
    <JokesContext.Provider value={contextValue}>
      {children}
    </JokesContext.Provider>
  );
};
