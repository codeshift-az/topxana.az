export type * from './contact';
export type * from './hero-slider';
export type * from './service';
export type * from './project';

// Common type for typing the APIs which can return count, next, previous, and results

export type PaginatedResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

export type Image = {
  id: 0;
  image: 'string';
};
