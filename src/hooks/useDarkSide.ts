import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Theme = "dark" | "light";
type ThemeSetter = Dispatch<SetStateAction<Theme>>;

export default function useDarkSide(): [Theme, ThemeSetter] {
  const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme);
  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
