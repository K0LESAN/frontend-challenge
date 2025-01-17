'use client';

import Cats from '@/components/cats';
import Container from '@/components/container';
import useCatsContext from '@/hooks/use-cats-context';

export default function FavoriteCatsPage() {
  const { favoriteCats } = useCatsContext();

  return (
    <Container>
      <Cats cats={favoriteCats} />
    </Container>
  );
}
