'use client';

import { useEffect, useRef } from 'react';
import styles from './index.module.css';

export function InfiniteLoader({
  callback
}: {
  callback: IntersectionObserverCallback;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.65
    });
    let observableRef: HTMLDivElement | null = null;

    if (ref.current) {
      observableRef = ref.current;
      observer.observe(observableRef);
    }

    return () => {
      if (observableRef) {
        observer.unobserve(observableRef);
      }
    };
  }, [callback]);

  return (
    <div ref={ref} className={styles.loader}>
      ... загружаем еще котиков ...
    </div>
  );
}
