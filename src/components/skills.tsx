import { Section } from "./section";

const skills = {
  core: [
    "Node.js",
    "JavaScript (ES6+)",
    "REST APIs",
    "JWT Authentication",
    "RBAC",
    "Socket.IO",
  ],
  frameworks: [
    "Express.js",
    "Nest.js",
    "React.js",
    "Next.js",
    "Laravel",
    "Django",
    "Flask",
  ],
  databases: ["MongoDB", "MySQL", "Oracle"],
  tools: ["Docker", "Nginx", "PM2", "Git", "GitHub", "Selenium"],
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Core technologies and tools I work with"
      subtitle="MERN is my primary stack, with strong backend experience across Node.js, Nest.js, Laravel, and Python."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Core */}
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-emerald-400/40">
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">Core Technologies</h3>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-300">
              MERN
            </span>
          </header>

          <ul className="grid gap-2 text-sm text-slate-300">
            {skills.core.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Frameworks */}
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-cyan-400/40">
          <header className="mb-4">
            <h3 className="text-base font-semibold text-white">Frameworks</h3>
          </header>

          <ul className="grid gap-2 text-sm text-slate-300">
            {skills.frameworks.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Databases */}
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-sky-400/40">
          <header className="mb-4">
            <h3 className="text-base font-semibold text-white">Databases</h3>
          </header>

          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {skills.databases.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        {/* Tools */}
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-violet-400/40">
          <header className="mb-4">
            <h3 className="text-base font-semibold text-white">Tools & Platforms</h3>
          </header>

          <ul className="grid gap-2 text-sm text-slate-300">
            {skills.tools.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>

      </div>
    </Section>
  );
}
