"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/50">
            BS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-50">Bheem Singh</span>
            <span className="text-xs text-slate-400">Software Engineer I · Mohali, India</span>
          </div>
        </motion.div>
        <nav className="hidden items-center gap-6 text-[11px] font-medium text-slate-300 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.18em] text-slate-300 transition hover:text-emerald-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
