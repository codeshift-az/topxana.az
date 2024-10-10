import { Project } from '@/types';

import axiosInstance from '@/api';

export const getProjects = async (serviceSlug: string) => {
  const { data } = await axiosInstance.get(
    `/projects${serviceSlug !== 'null' ? `?service=${serviceSlug}` : ''}`
  );
  return data?.results as Project[];
};
