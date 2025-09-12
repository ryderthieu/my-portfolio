import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import viHeader from "./locales/vi/header.json";
import enHeader from "./locales/en/header.json";
import jaHeader from "./locales/ja/header.json";
import viHome from "./locales/vi/home.json";
import enHome from "./locales/en/home.json";
import jaHome from "./locales/ja/home.json";
import viAbout from "./locales/vi/about.json";
import enAbout from "./locales/en/about.json";
import jaAbout from "./locales/ja/about.json";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        header: viHeader,
        home: viHome,
        about: viAbout,
      },
      en: {
        header: enHeader,
        home: enHome,
        about: enAbout,
      },
      ja: {
        header: jaHeader,
        home: jaHome,
        about: jaAbout,
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
