import React from 'react';
import * as cx from 'classnames';

import * as styles from './Type.module.css';

export const Title = ({ className, ...props }) => <span className={cx(styles.title, className)} {...props} />;

export const H1 = ({ className, ...props }) => <h1 className={cx(styles.header1, className)} {...props} />

export const H2 = ({ className, ...props }) => <h2 className={cx(styles.header2, className)} {...props} />

export const Regular = ({ className, ...props }) => <div className={cx(styles.regular, className)} {...props} />

export const Bold = ({ className, ...props }) => <b className={cx(styles.bold, className)} {...props} />

export const Small = ({ as: Component = "small", className, ...props }) => <Component className={cx(styles.small, className)} {...props} />
