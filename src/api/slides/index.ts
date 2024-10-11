import { HeroSlider } from '@/types';

import axiosInstance from '@/api';

export const getSlider = async () => {
  const { data } = await axiosInstance.get('/slides');
  return data?.results as HeroSlider[];
};
