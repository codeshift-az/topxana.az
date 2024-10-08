import { ContactInformation } from '@/types';

import axiosInstance from '@/api';

export const getContactInformation = async () => {
  const { data } = await axiosInstance.get('/contact/information');
  return data as ContactInformation;
};
