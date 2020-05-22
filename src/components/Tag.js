import React from 'react';
import * as cx from "classnames";

import * as styles from './Tag.module.css';

export const Tag = ({ className, children}) => <div className={cx(styles.root, className)}>{children}</div>
