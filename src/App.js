import React from "react";

import { FavouritesProvider } from "./FavouritesProvider";
import { JokesProvider } from "./JokesProvider";
import { Layout } from "./components";
import { HomePage } from "./pages";

import "./App.css";

export const App = () => (
  <JokesProvider>
    <FavouritesProvider>
      <Layout>
        <HomePage />
      </Layout>
    </FavouritesProvider>
  </JokesProvider>
);
