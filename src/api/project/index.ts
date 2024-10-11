import { Project } from '@/types';

import axiosInstance from '@/api';

export const getProjectList = async () => {
  const { data } = await axiosInstance.get(`/projects?limit=all`);
  return data as Project[];
};
