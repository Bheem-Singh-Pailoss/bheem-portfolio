"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/section";
import { FiGithub, FiX } from "react-icons/fi";
import { useProjectsController } from "../controllers";
import { staggerContainer, staggerItem, viewportSettings } from "@/utils/animations";

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

export function ProjectsView() {
  const { projects, activeProject, setActiveProject } = useProjectsController();

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Highlighted projects"
      subtitle="A selection of projects across scraping, dashboards, REST APIs, and backend systems."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {projects.map((project) => (
          <motion.button
            key={project.title}
            type="button"
            onClick={() => setActiveProject(project)}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-slate-950/70 p-[1px] text-left shadow-lg shadow-black/30 hover:border-emerald-400/70 hover:shadow-emerald-500/25"
          >
            <motion.div
              className="absolute inset-x-8 top-0 h-28 rounded-b-full bg-gradient-to-b from-emerald-500/15 via-emerald-500/0 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <div className="relative flex h-full flex-col rounded-[1rem] bg-slate-50/95 dark:bg-slate-950/95 p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="heading-md text-sm sm:text-base">
                  {project.title}
                </h3>
                <span className="tag-pill text-[10px] sm:text-xs">
                  {project.stack}
                </span>
              </div>
              <div className="mt-1 h-24 rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 p-[1px] sm:h-28">
                <div className="flex h-full items-center justify-center rounded-[0.8rem] bg-slate-50/85 dark:bg-slate-950/85 text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500">
                  Project Screenshot
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-700 dark:text-slate-300 sm:text-sm">
                {project.description}
              </p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-xl border border-slate-200/20 dark:border-white/15 bg-slate-50/95 dark:bg-slate-950/95 p-5 sm:p-7"
            >
              <motion.button
                type="button"
                onClick={() => setActiveProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/20 dark:border-white/10 bg-slate-200/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 shadow-sm shadow-black/20 dark:shadow-black/40 transition hover:border-emerald-500/60 dark:hover:border-emerald-400/60 hover:text-emerald-600 dark:hover:text-emerald-300"
                aria-label="Close project details"
              >
                <FiX className="h-4 w-4" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div>
                  <p className="section-title">Project</p>
                  <h3 className="heading-lg text-2xl">{activeProject.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
                    {activeProject.stack}
                  </p>
                </div>
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 p-[1px]">
                  <div className="flex h-full items-center justify-center rounded-[0.8rem] bg-slate-50/90 dark:bg-slate-950/90 text-[11px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500">
                    Project Screenshot Placeholder
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {activeProject.description}
                </p>
                {activeProject.github && (
                  <motion.a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>View on GitHub</span>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
