"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme, type Theme } from "./theme-provider";

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const icon = theme === "light" ? (
    <FiSun className="h-4 w-4" />
  ) : (
    <FiMoon className="h-4 w-4" />
  );

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-2 py-1 text-xs text-slate-200 shadow-sm shadow-black/30">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-100"
        aria-label="Toggle color theme"
      >
        {icon}
        <span>Theme</span>
      </button>
      <div className="flex gap-1 rounded-full bg-slate-900/80 p-0.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium transition ${
              theme === opt.value
                ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/60"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
