import React from "react";

import { Type, Form, Card } from "../components";

import * as styles from "./HomePage.module.css";

export const HomePage = (props) => (
    <section>
      <Hero className={styles.hero} />
      <Form className={styles.form} />
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
