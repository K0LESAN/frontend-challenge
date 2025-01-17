interface Result<T> {
  data: T | null;
  error: null | unknown;
}

interface CatInfo {
  _id: string;
  mimetype: string;
  size: number;
  tags: string[];
}

export type { Result, CatInfo };
