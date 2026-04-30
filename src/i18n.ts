import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json'
import ar from './locales/ar.json'
import es from './locales/es.json'


const isBrowser = typeof window !== 'undefined';

const i18nInstance = i18n;

if (isBrowser) {
  i18nInstance.use(LanguageDetector);
}

i18nInstance
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    resources: {
   en: { translation: en },
   ar: { translation: ar },
   es: { translation: es }
},

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;