type Image = {
  id: number;
  url: string;
};

type Results = {
  slug: string;
  title: string;
  images: Image[];
  description: string;
  created_at: string;
  updated_at: string;
};

export type Services = {
  count: string;
  next: string;
  previous: string;
  results: Results[];
};
