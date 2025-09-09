import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import viHeader from "./locales/vi/header.json";
import enHeader from "./locales/en/header.json";
import jaHeader from "./locales/ja/header.json";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        header: viHeader,
      },
      en: {
        header: enHeader,
      },
      ja: {
        header: jaHeader,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
