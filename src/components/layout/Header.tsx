import { useEffect, useState } from "react";
import LanguageSelector from "../ui/LanguageSelector";
import ThemeToggle from "../ui/ThemeToggle";
import { MenuIcon, CloseIcon, ChevronRightIcon } from "../../assets/icons";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, handleThemeChange } = useTheme();
  const { t } = useTranslation("header");
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  const navItems: NavItem[] = [
    {
      id: "home",
      label: t("home"),
      href: "#home",
    },
    {
      id: "about",
      label: t("about"),
      href: "#about",
    },
    {
      id: "skills",
      label: t("skills"),
      href: "#skills",
    },
    {
      id: "project",
      label: t("project"),
      href: "#project",
    },
    {
      id: "contact",
      label: t("contact"),
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="md:w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Portfolio
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="items-center gap-4 hidden md:flex">
              <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
                languages={languages}
              />
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                />
                <CloseIcon
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white/95 dark:bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-out z-50 md:hidden ${
          isMobileMenuOpen
            ? "max-h-full opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Portfolio
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <CloseIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="py-4 overflow-y-auto">
            <nav className="px-4 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center px-4 py-3 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 text-base font-medium group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex-1">{item.label}</span>
                  <ChevronRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-300 font-medium">
                  {t("theme")}
                </span>
                <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
              </div>

              <div className="space-y-2 flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-300 font-medium">
                  {t("language")}
                </span>
                <LanguageSelector
                  currentLanguage={currentLanguage}
                  onLanguageChange={(language) => changeLanguage(language)}
                  languages={languages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
