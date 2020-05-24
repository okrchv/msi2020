import React, { createContext, useState, useEffect } from "react";

import * as persistence from "./persistence";

const LOCAL_STORAGE_KEY = "favourites";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    persistence.hydrate(LOCAL_STORAGE_KEY, [])
  );

  useEffect(() => {
    persistence.persist(LOCAL_STORAGE_KEY, favourites);
  }, [favourites]);

  const toggleFavourite = jokeId => {
    setFavourites(favourites =>
      favourites.includes(jokeId)
        ? favourites.filter(id => id !== jokeId)
        : favourites.concat(jokeId)
    );
  };

  const contextValue = {
    favourites,
    toggleFavourite
  };

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};
