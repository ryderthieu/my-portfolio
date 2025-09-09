import { createContext } from "react";
import { useTranslation } from "react-i18next";
import type { Language, LanguageCode } from "../types/language.type";

interface LanguageContextProps {
  currentLanguage: LanguageCode;
  changeLanguage: (language: Language) => void;
  languages: Array<Language>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const languages: Array<Language> = [
    { code: "vi", name: "Tiếng Việt" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language.code);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: i18n.language as LanguageCode,
        changeLanguage,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
