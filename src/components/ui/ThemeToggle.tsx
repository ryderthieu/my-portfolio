import { SunIcon, MoonIcon } from "../../assets/icons";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onThemeChange: (theme: "light" | "dark") => void;
}

const ThemeToggle = ({ theme, onThemeChange }: ThemeToggleProps) => {
  const handleThemeChange = (theme: "light" | "dark") => {
    onThemeChange(theme);
  };

  return (
    <div className="relative inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-200">
      <button
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-white dark:bg-gray-600 shadow-sm"
            : "hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
        onClick={() => handleThemeChange("light")}
        aria-label="Light mode"
      >
        <SunIcon
          className={`w-4 h-4 transition-colors ${
            theme === "light"
              ? "text-gray-700 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
        />
      </button>
      <button
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-white dark:bg-gray-600 shadow-sm"
            : "hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
        onClick={() => handleThemeChange("dark")}
        aria-label="Dark mode"
      >
        <MoonIcon
          className={`w-4 h-4 transition-colors ${
            theme === "dark"
              ? "text-gray-700 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
