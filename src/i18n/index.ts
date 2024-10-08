import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import translationsAZ from './locales/az/translations.json';
import translationsEN from './locales/en/translations.json';
import translationsRU from './locales/ru/translations.json';

// The translations
const resources = {
  en: translationsEN,
  az: translationsAZ,
  ru: translationsRU,
};

// Language detection
const lng = localStorage.getItem('LANG')?.toString();

// Fallback language
const fallbackLng = 'az';

// Supported languages
const supportedLngs = ['az', 'en', 'ru'];

// Development mode
const debug = import.meta.env.MODE === 'development';

i18n.use(initReactI18next).init({
  lng,
  debug,
  resources,
  fallbackLng,
  supportedLngs,
});

export default i18n;
