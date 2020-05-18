import React from 'react';
import * as cx from 'classnames';

import * as styles from './Type.module.css';

export const H1 = ({ className, ...props }) => <h1 className={cx(styles.header1, className)} {...props} />

export const H2 = props => <h2 className={styles.header2} {...props} />

export const Regular = props => <div className={styles.regular} {...props} />

export const Small = ({ as: Component = "small", className, ...props }) => <Component className={cx(styles.small, className)} {...props} />

export const Bold = props => <b className={styles.bold} {...props} />
