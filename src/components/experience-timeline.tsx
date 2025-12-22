import { Section } from "./section";

const experiences = [
  {
    company: "Bronze Byte IT Solutions",
    period: "Oct 2025 – Present",
    role: "Software Engineer · MERN & Backend Services",
    items: [
      "MERN stack development",
      "Node.js + Nest.js backend services",
      "REST APIs, JWT, RBAC",
      "MongoDB optimization",
      "React dashboards",
      "Python automation & scraping",
    ],
  },
  {
    company: "Exotica IT Solutions Pvt Ltd",
    period: "Dec 2022 – Apr 2025",
    role: "Full Stack Developer",
    items: [
      "React, Node.js, Laravel, Django",
      "REST APIs & dashboards",
      "WordPress theme & plugin development",
      "MySQL, MongoDB, Oracle",
    ],
  },
  {
    company: "Unicloud IT Services",
    period: "Aug 2020 – Oct 2022",
    role: "Backend & Integrations Developer",
    items: [
      "PHP development",
      "Zoho CRM automation",
      "Backend integrations",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      subtitle="Timeline of roles where I have built production systems, dashboards, and automation workflows."
    >
      <ol className="relative border-l border-slate-700/70 pl-6 text-sm text-slate-200">
        {experiences.map((exp, idx) => (
          <li key={exp.company} className="mb-10 last:mb-0">
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-emerald-300 bg-slate-950" />
            <div className="card-subtle">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="heading-md">{exp.company}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    {exp.role}
                  </p>
                </div>
                <p className="text-xs text-slate-400">{exp.period}</p>
              </div>
              <ul className="mt-3 grid gap-1.5 text-sm text-slate-200 sm:grid-cols-2">
                {exp.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-4 rounded-full bg-emerald-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
