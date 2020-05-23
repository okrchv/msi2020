import React from "react";
import { FormSpy } from "react-final-form";

import { Type, Card, Form, Field, Button } from "../components";

import * as styles from "./HomePage.module.css";

export const HomePage = (props) => (
  <section>
    <Hero className={styles.hero} />
    <SearchForm
      onSubmit={(formValue) => {
        console.log(formValue);
      }}
    />
    <Card className={styles.card} />
    <Card className={styles.card} />
  </section>
);

const Hero = ({ className }) => (
  <div className={className}>
    <Type.H1>Hey!</Type.H1>
    <Type.H2>Let's try to find a joke for you:</Type.H2>
  </div>
);

const SearchForm = ({ onSubmit }) => (
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
    <FormSpy subscription={{ values: true }}>
      {({ values }) =>
        values.type === "category" && (
          <div className={styles.checkboxContainer}>
            <Field.Tag name="params.category" value="animal">
              Animal
            </Field.Tag>
            <Field.Tag name="params.category" value="career">
              Career
            </Field.Tag>
            <Field.Tag name="params.category" value="celebrity">
              Celebrity
            </Field.Tag>
            <Field.Tag name="params.category" value="dev">
              Dev
            </Field.Tag>
          </div>
        )
      }
    </FormSpy>
    <Field.Radio name="type" value="search">
      Search
    </Field.Radio>
    <FormSpy subscription={{ values: true }}>
      {({ values }) =>
        values.type === "search" && (
          <div>
            <Field.Text name="params.query" placeholder="Free text search..." />
          </div>
        )
      }
    </FormSpy>
    <Button>Get a joke</Button>
  </Form>
);
