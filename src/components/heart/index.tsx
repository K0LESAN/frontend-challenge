'use client';

import type { FavoriteCatsContext } from '@/shared/types';
import HeartFill from '@/icons/heart-fill';
import HeartStroke from '@/icons/heart-stroke';
import useCatsContext from '@/hooks/use-cats-context';
import SVG from '../svg';
import styles from './index.module.css';

export default function Heart({ id }: { id: string }) {
  const { favoriteCats, toggleFavorites }: FavoriteCatsContext =
    useCatsContext();
  const isFavoriteCat: boolean = favoriteCats.includes(id);

  return (
    <button
      className={`${styles.heart} ${isFavoriteCat ? styles.heart_clicked : ''}`}
      onClick={() => {
        toggleFavorites(id);
      }}
    >
      <SVG
        width='40'
        height='37'
        viewBox='0 0 40 37'
        className={styles.heart__stroke}
      >
        <HeartStroke />
      </SVG>
      <SVG
        width='40'
        height='37'
        viewBox='0 0 40 37'
        className={styles.heart__fill}
      >
        <HeartFill />
      </SVG>
    </button>
  );
}
