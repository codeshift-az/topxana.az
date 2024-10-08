import axios from 'axios';

import i18n from '@/i18n';

const baseURL = import.meta.env.VITE_API_URL as string;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Accept-Language': i18n.language,
  },
});

export default axiosInstance;
