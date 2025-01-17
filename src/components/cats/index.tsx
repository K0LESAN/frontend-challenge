import type { CatInfo } from '@/shared/types';
import { catService } from '@/services/cat';
import Cat from '../cat';
import styles from './index.module.css';

export default async function Cats() {
  const { data: cats } = await catService.getByPage(1);

  if (!cats) {
    return <div>Котиков не найдено.</div>;
  }

  return (
    <div className={styles.wrapper}>
      {cats.map((cat: CatInfo) => {
        return <Cat key={cat._id} id={cat._id} />;
      })}
    </div>
  );
}
