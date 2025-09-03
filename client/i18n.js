// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const supportedLngs = ['en', 'ja', 'de'];
const defaultNS = 'common';
const ns = [defaultNS];

const isBrowser = typeof window !== 'undefined';

if (!i18n.isInitialized) {
  if (isBrowser) {
    // Browser: use http backend + language detector
    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: 'en',
        supportedLngs,
        ns,
        defaultNS,
        debug: false,
        interpolation: { escapeValue: false },
        backend: {
          // public/locales will be served by Next as static files
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
        react: { useSuspense: false }, // avoid suspending on SSR
      });
  } else {
    // Server (build/SSG): load JSON from disk synchronously to avoid network I/O
    // require fs/path inside branch so bundler doesn't try to include them in client bundle
    const fs = require('fs');
    const path = require('path');

    const resources = {};
    const localesPath = path.resolve('./public/locales');

    supportedLngs.forEach((lng) => {
      resources[lng] = {};
      ns.forEach((n) => {
        const file = path.join(localesPath, lng, `${n}.json`);
        if (fs.existsSync(file)) {
          try {
            resources[lng][n] = JSON.parse(fs.readFileSync(file, 'utf8'));
          } catch (err) {
            console.error(`Failed to parse ${file}:`, err);
            resources[lng][n] = {};
          }
        } else {
          resources[lng][n] = {};
        }
      });
    });

    i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: 'en', // default for server; Next will pick locale for each page
        fallbackLng: 'en',
        supportedLngs,
        ns,
        defaultNS,
        debug: false,
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
      });
  }
}

export default i18n;
