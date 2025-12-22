"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./section";
import { FiGithub, FiX } from "react-icons/fi";

type Project = {
  title: string;
  stack: string;
  description: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Whale Watcher",
    stack: "React, Django, MySQL",
    description:
      "Monitoring dashboard that visualizes key metrics and events, backed by a Django REST API and MySQL database.",
  },
  {
    title: "Amazon Multi-ASIN Intelligence Scraper",
    stack: "Python, Selenium",
    description:
      "Scraping engine that aggregates product intelligence across multiple ASINs for research and lead generation.",
  },
  {
    title: "Social & Web Scraping Dashboard",
    stack: "React, Python",
    description:
      "Frontend dashboard to control and visualize social media and web scraping jobs with Python-based workers.",
  },
  {
    title: "Twitter Scraping REST API",
    stack: "Django",
    description:
      "RESTful API that exposes structured endpoints for Twitter data scraping and analytics pipelines.",
  },
  {
    title: "Tax Overages Lead Generation System",
    stack: "Python",
    description:
      "Automation system to identify and surface tax overages opportunities, with exportable reports for outreach.",
  },
  {
    title: "Deskpluse",
    stack: "Nest.js, MongoDB",
    description:
      "Backend services for a productivity and communication platform using Nest.js and MongoDB.",
  },
  {
    title: "Auto Reach",
    stack: "Nest.js, MongoDB, Next.js",
    description:
      "Lead engagement and outreach system with a Next.js frontend and Nest.js microservices.",
  },
  {
    title: "Dil Se Indian Restaurant",
    stack: "Laravel, MySQL",
    description:
      "Restaurant web application with menu management, booking flows, and content management built on Laravel.",
  },
];

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.2 } },
};

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Highlighted projects"
      subtitle="A selection of projects across scraping, dashboards, REST APIs, and backend systems."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-slate-950/70 p-[1px] text-left shadow-lg shadow-black/30 hover:border-emerald-400/70 hover:shadow-emerald-500/25"
          >
            <div className="absolute inset-x-8 top-0 h-28 rounded-b-full bg-gradient-to-b from-emerald-500/15 via-emerald-500/0 to-transparent" />
            <div className="relative flex h-full flex-col rounded-[1rem] bg-slate-950/95 p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="heading-md text-sm sm:text-base">{project.title}</h3>
                <span className="tag-pill text-[10px] sm:text-xs">{project.stack}</span>
              </div>
              <div className="mt-1 h-24 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-[1px] sm:h-28">
                <div className="flex h-full items-center justify-center rounded-[0.8rem] bg-slate-950/85 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Project Screenshot
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-300 sm:text-sm">{project.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-panel relative w-full max-w-xl border border-white/15 bg-slate-950/95 p-5 sm:p-7"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 shadow-sm shadow-black/40 transition hover:border-emerald-400/60 hover:text-emerald-300"
                aria-label="Close project details"
              >
                <FiX className="h-4 w-4" />
              </button>
              <div className="space-y-4">
                <div>
                  <p className="section-title">Project</p>
                  <h3 className="heading-lg text-2xl">{active.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
                    {active.stack}
                  </p>
                </div>
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-[1px]">
                  <div className="flex h-full items-center justify-center rounded-[0.8rem] bg-slate-950/90 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    Project Screenshot Placeholder
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-200">{active.description}</p>
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
