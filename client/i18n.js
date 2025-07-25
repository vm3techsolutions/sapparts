// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend'; // ⬅️ Add this

// i18n
//   .use(HttpBackend) // ⬅️ Add this
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     supportedLngs: ['en', 'ja'],
//     debug: true, // helpful during development
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json', // ⬅️ Tell it where to load translations from
//     },
//     ns: ['common'],
//     defaultNS: 'common',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
