import { Image } from '@/types';

export type Service = {
  slug: string;
  title: string;
  images: Image[];
  description: string;
  updated_at: string;
  created_at: string;
};
