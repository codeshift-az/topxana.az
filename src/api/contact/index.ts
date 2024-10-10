import { ContactInformation, ContactMessageForm } from '@/types';

import axiosInstance from '@/api';

export const getContactInformation = async () => {
  const { data } = await axiosInstance.get('/contact/information');
  return data as ContactInformation;
};

export const sendContactMessage = async (message: ContactMessageForm) => {
  await axiosInstance.post('/contact/messages/', message);
};
