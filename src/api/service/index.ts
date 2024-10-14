import { Service } from '@/types';

import axiosInstance from '@/api';

export const getServiceList = async () => {
  const { data } = await axiosInstance.get(`/services?limit=all`);

  return data as Service[];
};
