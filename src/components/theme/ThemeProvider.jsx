import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const STORAGE_KEY = "sf-ug-theme";

function getInitialTheme() {
  // Prefer saved preference.
  const saved =
    typeof window !== "undefined"
      ? window.localStorage.getItem(STORAGE_KEY)
      : null;
  if (saved === "light" || saved === "dark") return saved;

  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () =>
        setThemeState((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
