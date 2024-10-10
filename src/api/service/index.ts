import { Services } from '@/types';

import axiosInstance from '@/api';

export const getServiceData = async () => {
  const { data } = await axiosInstance.get('/services');
  return data as Services;
};
