"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return "system";
}

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    if (typeof window === "undefined") return "dark";
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    return mq.matches ? "dark" : "light";
  }

  return theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((value: Theme) => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    const resolved = resolveTheme(value);

    root.classList.remove("light", "dark");
    root.classList.add(resolved);
  }, []);

  useEffect(() => {
    const preferred = getPreferredTheme();
    setThemeState(preferred);
    applyTheme(preferred);
    setMounted(true);
  }, [applyTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        applyTheme("system");
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme, applyTheme]);

  const setTheme = useCallback(
    (value: Theme) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", value);
      }
      setThemeState(value);
      applyTheme(value);
    },
    [applyTheme],
  );

  const value: ThemeContextValue = {
    theme,
    setTheme,
  };

  if (!mounted) {
    return <div className="invisible">{children}</div>;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: "dark" as Theme,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setTheme: () => {},
    };
  }
  return ctx;
}
