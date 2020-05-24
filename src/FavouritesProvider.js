import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

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
