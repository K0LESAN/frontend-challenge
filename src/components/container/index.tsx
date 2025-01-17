'use client';

import type { PropsWithChildren } from 'react';
import styles from './index.module.css';

export default function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
