import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/90">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 sm:flex-row">
        <p>
          © {year} <span className="font-medium text-slate-200">Bheem Singh</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Bheem-Singh-Pailoss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 transition hover:text-emerald-400"
          >
            <FiGithub className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/bheem-singh-88300a194"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 transition hover:text-emerald-400"
          >
            <FiLinkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
