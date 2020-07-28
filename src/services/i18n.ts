import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { setLocale } from 'yup';

i18n
  // load language files in another request
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    returnObjects: true,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // the application namespace should be always loaded
    defaultNS: 'translation',

    backend: {
      loadPath: '/lang/{{lng}}/{{ns}}.json',
      addPath: '/lang/{{lng}}/{{ns}}.json',
    },
  });

i18n.on('initialized', () => {
  // Set locale to Yup
  setLocale(i18n.t('validation'));
});

export default i18n;
