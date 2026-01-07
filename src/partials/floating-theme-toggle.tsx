"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      if (typeof window === "undefined") return;
      
      const root = window.document.documentElement;
      const hasDarkClass = root.classList.contains("dark");
      setIsDark(hasDarkClass);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    if (typeof window !== "undefined") {
      observer.observe(window.document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    const updateTheme = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else {
        if (typeof window !== "undefined") {
          setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
      }
    };

    updateTheme();

    if (theme === "system" && typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateTheme);
      return () => {
        mq.removeEventListener("change", updateTheme);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/20 dark:border-white/10 bg-slate-100 dark:bg-slate-900/80 text-slate-900 dark:text-slate-200 shadow-lg shadow-black/20 dark:shadow-black/40 backdrop-blur-sm transition hover:border-emerald-500/60 dark:hover:border-emerald-400/60 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiMoon className="h-5 w-5" />
        ) : (
          <FiSun className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
