import React, { useState, useEffect } from "react";

import { Type, Card, Form, Field, Button } from "../components";

import * as styles from "./HomePage.module.css";

export const HomePage = (props) => {
  const [jokes, setJokes] = useState([]);

  const handleSubmit = async ({ type, params }) => {
    const fetchJokes = type === "search" ? searchJokes : getRandomJoke;
    const jokes = await fetchJokes(params);
    setJokes(jokes);
  };

  return (
    <section>
      <Hero className={styles.hero} />
      <SearchForm onSubmit={handleSubmit} />
      {jokes.map((joke) => <Card key={joke.id} data={joke} />)}
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
    getCategories().then((categories) => setCategories(categories));
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
          {categories.map((category) => (
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

const getRandomJoke = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?${searchParams.toString()}`
  );
  const data = await response.json();
  return [data];
};

const searchJokes = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?${searchParams.toString()}`
  );
  const data = await response.json();
  return data.result;
};

const getCategories = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const data = await response.json();
  return data;
};
