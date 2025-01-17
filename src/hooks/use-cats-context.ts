import { FavoriteCatsContext } from '@/shared/types';
import { useContext } from 'react';
import { CatsContext } from '@/providers/cats-context';

export default function useCatsContext(): FavoriteCatsContext {
  const favoriteCats: FavoriteCatsContext | null =
    useContext<FavoriteCatsContext | null>(CatsContext);

  return favoriteCats!;
}
