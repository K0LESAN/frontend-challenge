import type { Result, CatInfo } from '@/shared/types';
import { Api } from '@/shared/constants';

export const catService = {
  async getByPage(
    page: number,
    limit: number = 15
  ): Promise<Result<CatInfo[]>> {
    const result: Result<CatInfo[]> = {
      data: null,
      error: null
    };

    try {
      const response: Response = await fetch(
        `${Api.baseURL}${Api.cats}?skip=${(page - 1) * limit}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`Failed request with status ${response.status}`);
      }

      const data: CatInfo[] = await response.json();

      result.data = data;
    } catch (error: unknown) {
      result.error = error;
      console.error(error);
    }

    return result;
  }
};
