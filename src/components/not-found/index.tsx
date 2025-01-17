import Container from '../container';
import styles from './index.module.css';

export default async function NotFound() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Упс...</h2>
        <p className={styles.descrption}>
          Такой страницы с котиками не найдено.
        </p>
      </div>
    </Container>
  );
}
