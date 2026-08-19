import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { siteContent } from "@/contents/en";

type Theme = "light" | "dark";

const getCurrentTheme = (): Theme => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  const nextThemeLabel =
    theme === "dark"
      ? siteContent.shell.lightThemeLabel
      : siteContent.shell.darkThemeLabel;

  return (
    <button
      type="button"
      className="interactive-shift inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground
      hover:border-signal hover:text-signal"
      aria-label={nextThemeLabel}
      aria-pressed={theme === "dark"}
      title={nextThemeLabel}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" className="size-4" />
      ) : (
        <Moon aria-hidden="true" className="size-4" />
      )}
      <span className="sr-only">{siteContent.shell.themeToggleLabel}</span>
    </button>
  );
};

export default ThemeToggle;
