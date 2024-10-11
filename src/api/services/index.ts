import { Service } from '@/types';

import axiosInstance from '@/api';

export const getServices = async () => {
  const { data } = await axiosInstance.get(`/services?limit=all`);
  console.log(data, 'services');
  return data as Service[];
};
