import { Image, Service } from '@/types';

export type Project = {
  slug: string;
  title: string;
  images: Image[];
  service: Service;
  description: string;
  updated_at: string;
  created_at: string;
};
