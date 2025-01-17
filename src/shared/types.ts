interface Result<T> {
  data: T | null;
  error: null | unknown;
}

interface Cat {
  _id: string;
  mimetype: string;
  size: number;
  tags: string[];
}

export type { Result, Cat };
