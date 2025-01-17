import HeartFill from '../icons/heart-fill';
import HeartStroke from '../icons/heart-stroke';
import SVG from '../svg';
import styles from './index.module.css';

export default async function Heart() {
  return (
    <button className={styles.heart}>
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
