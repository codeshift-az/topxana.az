import { HeroSlider } from '@/types';

import axiosInstance from '@/api';

export const getHeroSlider = async () => {
  const { data } = await axiosInstance.get('/slides');
  return data?.results as HeroSlider[];
};
