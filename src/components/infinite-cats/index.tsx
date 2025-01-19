'use client';

import { useCallback, useEffect, useState } from 'react';
import Cats from '@/components/cats';
import Container from '@/components/container';
import { InfiniteLoader } from '@/components/infinite-loader';
import { catService } from '@/services/cat';
import { CatInfo } from '@/shared/types';
import Loader from '../loader';

export default function InfiniteCats() {
  const [cats, setCats] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasNextCats, setHasNextCats] = useState<boolean>(false);
  const callback: IntersectionObserverCallback = useCallback(
    ([loader]: IntersectionObserverEntry[]): void => {
      if (loader.isIntersecting) {
        setPage((prev: number): number => {
          return prev + 1;
        });
      }
    },
    []
  );

  useEffect(() => {
    const abortController = new AbortController();
    const fetchCats = async (): Promise<void> => {
      const { data } = await catService.getByPage({
        page,
        signal: abortController.signal
      });
      const newCats = data?.map((cat: CatInfo): string => cat._id) || [];

      if (newCats.length) {
        setCats((prev: string[]): string[] => {
          return [...prev, ...newCats];
        });
      }

      setIsLoading(false);
      setHasNextCats(newCats.length > 0);
    };

    fetchCats();

    return () => {
      abortController.abort('Clear useEffect');
    };
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Cats cats={cats} />
      {hasNextCats && <InfiniteLoader callback={callback} />}
    </Container>
  );
}
