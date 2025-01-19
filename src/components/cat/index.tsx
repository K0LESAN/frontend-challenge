'use client';

import Image from 'next/image';

import { useState } from 'react';
import UnexpectedErrorCat from '@/assets/unexpected-error.jpg';
import Heart from '../heart';
import Loader from '../loader';
import styles from './index.module.css';

export default function Cat({ id }: { id: string }) {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={styles.block}>
      {isLoading && !isError && <Loader />}
      {isError && (
        <Image
          src={UnexpectedErrorCat}
          alt='Unexpected error'
          className={styles.cat}
        />
      )}
      {!isError && (
        <Image
          src={`https://cataas.com/cat/${id}`}
          alt=''
          width={225}
          height={225}
          className={`${styles.cat} ${isLoading ? styles.cat_hidden : ''}`}
          onLoad={() => {
            setIsLoading(false);
          }}
          onError={() => {
            setIsError(true);
          }}
        />
      )}
      {!isLoading && !isError && <Heart id={id} />}
    </div>
  );
}
