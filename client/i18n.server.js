import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fs from 'fs';
import path from 'path';

const supportedLngs = ['en', 'ja','de'];
const ns = ['common'];

if (!i18n.isInitialized) {
  const resources = {};
  const localesPath = path.resolve('./public/locales');

  supportedLngs.forEach((lng) => {
    resources[lng] = {};
    ns.forEach((n) => {
      const file = path.join(localesPath, lng, `${n}.json`);
      resources[lng][n] = fs.existsSync(file)
        ? JSON.parse(fs.readFileSync(file, 'utf8'))
        : {};
    });
  });

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      supportedLngs,
      ns,
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
