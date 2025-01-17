'use client';

import { useCallback, useEffect, useState } from 'react';
import Cats from '@/components/cats';
import Container from '@/components/container';
import { InfiniteLoader } from '@/components/infinite-loader';
import { catService } from '@/services/cat';
import { CatInfo } from '@/shared/types';

export default function RootPage() {
  const [cats, setCats] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);

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
    const fetchCats = async (): Promise<void> => {
      const { data } = await catService.getByPage(page);
      const catsImage =
        data?.filter((cat: CatInfo): boolean => cat.mimetype !== 'image/gif') ||
        [];
      const newCats = catsImage.map((cat: CatInfo): string => cat._id);

      if (newCats.length) {
        setCats((prev: string[]): string[] => {
          return [...prev, ...newCats];
        });
      }
    };

    fetchCats();
  }, [page]);

  return (
    <Container>
      <Cats cats={cats} />
      {cats.length > 0 && <InfiniteLoader callback={callback} />}
    </Container>
  );
}
