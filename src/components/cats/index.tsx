'use client';

import Cat from '../cat';
import styles from './index.module.css';

export default function Cats({ cats }: { cats: string[] }) {
  return (
    <div className={styles.wrapper}>
      {cats.length ? (
        cats.map((id: string) => {
          return <Cat key={id} id={id} />;
        })
      ) : (
        <div className={styles.message}>Котиков не найдено.</div>
      )}
    </div>
  );
}
