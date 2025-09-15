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
import viSkills from "./locales/vi/skills.json";
import enSkills from "./locales/en/skills.json";
import jaSkills from "./locales/ja/skills.json";
import viProjects from "./locales/vi/projects.json";
import enProjects from "./locales/en/projects.json";
import jaProjects from "./locales/ja/projects.json";
import viContact from "./locales/vi/contact.json";
import enContact from "./locales/en/contact.json";
import jaContact from "./locales/ja/contact.json";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        header: viHeader,
        home: viHome,
        about: viAbout,
        skills: viSkills,
        projects: viProjects,
        contact: viContact,
      },
      en: {
        header: enHeader,
        home: enHome,
        about: enAbout,
        skills: enSkills,
        projects: enProjects,
        contact: enContact,
      },
      ja: {
        header: jaHeader,
        home: jaHome,
        about: jaAbout,
        skills: jaSkills,
        projects: jaProjects,
        contact: jaContact,
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
