import { HeroSlider } from '@/types/hero-slider';

import axiosInstance from '@/api';

export const getHeroSlider = async () => {
  const { data } = await axiosInstance.get('/slides');
  return data?.results as HeroSlider[];
};
