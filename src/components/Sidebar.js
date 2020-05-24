import React, { useState, useContext } from "react";
import cx from "classnames";

import { JokesContext } from "../JokesProvider";
import { FavouritesContext } from "../FavouritesProvider";
import { Button, Card, Type } from ".";
import { SidebarIcon } from "../icons";

import * as styles from "./Sidebar.module.css";

export const Sidebar = ({ className, props }) => {
  const [isVisible, setVisibility] = useState(false);
  const { getJokes } = useContext(JokesContext);
  const { favourites, toggleFavourite } = useContext(FavouritesContext);

  const favouriteJokes = getJokes(favourites);

  return (
    <>
      <div
        className={cx(styles.backdrop, {
          [styles.containerHidden]: !isVisible
        })}
      />
      <header className={styles.header}>
        <Button
          className={styles.favouriteButton}
          onClick={() => setVisibility(v => !v)}
          variant="empty"
        >
          <SidebarIcon closed={isVisible} />
        </Button>
        <Type.Title className={styles.headerText}>Favourite</Type.Title>
      </header>
      <div
        className={cx(styles.container, {
          [styles.containerHidden]: !isVisible
        })}
      >
        <section className={styles.content}>
          {favouriteJokes.map(joke => (
            <Card
              key={joke.id}
              data={joke}
              favourite={favourites.includes(joke.id)}
              onFavourite={() => toggleFavourite(joke.id)}
              variant="small"
            />
          ))}
        </section>
      </div>
    </>
  );
};
