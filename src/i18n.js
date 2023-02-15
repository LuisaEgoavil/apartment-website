import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'de', 'es'],
    fallbackLng: 'en',
    debag: true,
    detection: {
      order: ['cookie', 'htmlTag', 'path', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n