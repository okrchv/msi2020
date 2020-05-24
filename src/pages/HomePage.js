import React, { useState, useEffect, useContext } from "react";

import * as api from "../api";
import { FavouritesContext } from "../FavouritesProvider";
import { JokesContext } from "../JokesProvider";
import { Type, Card, Form, Field, Button } from "../components";

import * as styles from "./HomePage.module.css";

export const HomePage = props => {
  const { getJokes, cacheJokes } = useContext(JokesContext);
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const [found, setFound] = useState([]);

  const foundJokes = getJokes(found);

  const handleSubmit = async ({ type, params }) => {
    const fetchJokes = type === "search" ? api.searchJokes : api.getRandomJoke;
    const jokes = await fetchJokes(params);

    cacheJokes(jokes);
    setFound(jokes.map(joke => joke.id));
  };

  return (
    <section>
      <Hero className={styles.hero} />
      <SearchForm onSubmit={handleSubmit} />
      {foundJokes.map(joke => (
        <Card
          key={joke.id}
          data={joke}
          favourite={favourites.includes(joke.id)}
          onFavourite={() => toggleFavourite(joke.id)}
        />
      ))}
    </section>
  );
};

const Hero = ({ className }) => (
  <div className={className}>
    <Type.H1>Hey!</Type.H1>
    <Type.H2>Let's try to find a joke for you:</Type.H2>
  </div>
);

const SearchForm = ({ onSubmit }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then(categories => setCategories(categories));
  }, []);

  return (
    <Form
      className={styles.form}
      initialValues={{ type: "random" }}
      onSubmit={onSubmit}
    >
      <Field.Radio name="type" value="random">
        Random
      </Field.Radio>

      <Field.Radio name="type" value="category">
        From categories
      </Field.Radio>
      <Field.Condition when="type" is="category">
        <div className={styles.checkboxContainer}>
          {categories.map(category => (
            <Field.Tag key={category} name="params.category" value={category}>
              {category}
            </Field.Tag>
          ))}
        </div>
      </Field.Condition>

      <Field.Radio name="type" value="search">
        Search
      </Field.Radio>
      <Field.Condition when="type" is="search">
        <Field.Text name="params.query" placeholder="Free text search..." />
      </Field.Condition>

      <Button>Get a joke</Button>
    </Form>
  );
};
