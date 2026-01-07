"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useHeroController } from "../controllers";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 0.61, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const techItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15 },
  }),
};

export function HeroView() {
  const { heroData } = useHeroController();

  return (
    <section id="home" className="section-padding pt-14 sm:pt-20 lg:pt-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]"
        >
          <div className="space-y-9">
            <motion.div variants={item} className="space-y-4">
              <span className="gradient-pill">{heroData.title}</span>

              <h1 className="heading-xl">
                {heroData.name}
                <span className="mt-2 block text-lg font-normal text-slate-600 dark:text-slate-300 sm:text-xl">
                  {heroData.subtitle}
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg"
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link href="#projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="#contact" className="btn-ghost">
                Contact Me
              </Link>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={heroData.socialLinks.github}
                  target="_blank"
                  className="social-icon"
                >
                  <FiGithub />
                </a>
                <a
                  href={heroData.socialLinks.linkedin}
                  target="_blank"
                  className="social-icon"
                >
                  <FiLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
            >
              {heroData.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  custom={i}
                  variants={techItem}
                  className="badge-soft"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/40 dark:border-emerald-500/40 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-[1px] shadow-xl shadow-emerald-500/20 dark:shadow-emerald-500/30"
          >
            <div className="relative rounded-[1.4rem] bg-slate-50/90 dark:bg-slate-950/90 p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300">
                  Priority Tech Stack
                </p>

                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {heroData.priorityStack.map((stack) => (
                    <li key={stack.title}>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-300">
                        {stack.title}
                      </span>{" "}
                      {stack.items.length > 0 && (
                        <span className="text-slate-600 dark:text-slate-400">{stack.items[0]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

