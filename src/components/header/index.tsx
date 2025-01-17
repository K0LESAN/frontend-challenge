import Container from '../container';
import Navigation from '../navigation';
import styles from './index.module.css';

export default async function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </div>
  );
}
