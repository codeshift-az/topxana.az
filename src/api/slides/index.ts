import { Slide } from '@/types';

import axiosInstance from '@/api';

export const getSlideList = async () => {
  const { data } = await axiosInstance.get('/slides?limit=all');
  return data as Slide[];
};
