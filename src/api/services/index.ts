import { PaginatedResponse, Service } from '@/types';

import axiosInstance from '@/api';

export const getServices = async (url: string) => {
  const { data } = await axiosInstance.get(`/services?${url}`);
  return data as PaginatedResponse<Service>;
};
