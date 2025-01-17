'use client';

import Image from 'next/image';
import Heart from '../heart';
import styles from './index.module.css';

export default function Cat({ id }: { id: string }) {
  return (
    <div className={styles.block}>
      <Image
        src={`https://cataas.com/cat/${id}`}
        alt=''
        width={225}
        height={225}
        className={styles.cat}
      />
      <Heart id={id} />
    </div>
  );
}
