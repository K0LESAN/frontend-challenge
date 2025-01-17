'use client';

import type { FavoriteCatsContext } from '@/shared/types';
import { createContext, PropsWithChildren, useState } from 'react';

export const CatsContext = createContext<FavoriteCatsContext | null>(null);

export function CatsContextProvider({ children }: PropsWithChildren) {
  const [favoriteCats, setFavoriteCats] = useState<string[]>([]);

  return (
    <CatsContext.Provider
      value={{
        favoriteCats,
        toggleFavorites(id: string): void {
          const index = favoriteCats.findIndex(
            (currectId: string): boolean => id === currectId
          );

          if (index === -1) {
            setFavoriteCats((prev) => [...prev, id]);
          } else {
            setFavoriteCats((prev) => {
              return prev.filter((_, catIndex) => catIndex !== index);
            });
          }
        }
      }}
    >
      {children}
    </CatsContext.Provider>
  );
}
