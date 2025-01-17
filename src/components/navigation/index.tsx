import { Routes } from '@/shared/constants';
import NavLink from '../nav-link';
import styles from './index.module.css';

export default async function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        href={Routes.home}
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Все котики
      </NavLink>
      <NavLink
        href={Routes.favorites}
        className={styles.link}
        activeClassName={styles.link_active}
      >
        Любимые котики
      </NavLink>
    </nav>
  );
}
