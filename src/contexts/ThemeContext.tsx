import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  handleThemeChange: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const applyTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (userTheme && (userTheme === "light" || userTheme === "dark")) {
      setTheme(userTheme);
      applyTheme(userTheme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      applyTheme("light");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
