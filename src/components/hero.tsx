"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

/* ---------------- Animations ---------------- */

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

/* ---------------- Component ---------------- */

export default function Hero() {
  const techStack = [
    "MERN Stack",
    "Node.js Backends",
    "Nest.js",
    "Laravel (PHP)",
    "Python Automation",
  ];

  return (
    <section id="home" className="section-padding pt-14 sm:pt-20 lg:pt-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-9">
            <motion.div variants={item} className="space-y-4">
              <span className="gradient-pill">
                Software Engineer · MERN Stack
              </span>

              <h1 className="heading-xl">
                Bheem Singh
                <span className="mt-2 block text-lg font-normal text-slate-300 sm:text-xl">
                  Software Engineer I · Backend & Automation
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
            >
              Software Engineer with 5 years of experience specializing in
              MERN stack and Node.js backend systems. I build scalable,
              secure, and high-performance applications using Nest.js,
              Laravel, and Python for backend development and automation.
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
                  href="https://github.com/Bheem-Singh-Pailoss"
                  target="_blank"
                  className="social-icon"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/in/bheem-singh-88300a194"
                  target="_blank"
                  className="social-icon"
                >
                  <FiLinkedin />
                </a>
              </div>
            </motion.div>

            {/* TECH STACK ANIMATION */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
            >
              {techStack.map((tech, i) => (
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

          {/* RIGHT CARD */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-[1px] shadow-xl shadow-emerald-500/30"
          >
            <div className="relative rounded-[1.4rem] bg-slate-950/90 p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Priority Tech Stack
                </p>

                <ul className="space-y-2 text-sm text-slate-200">
                  <li>
                    <span className="font-semibold text-emerald-300">
                      1. MERN Stack
                    </span>{" "}
                    <span className="text-slate-400">
                      (Node, Express, React, MongoDB)
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-emerald-300">
                      2. Nest.js
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-emerald-300">
                      3. Laravel (PHP)
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-emerald-300">
                      4. Python
                    </span>{" "}
                    <span className="text-slate-400">
                      (Django, Flask, Selenium)
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-emerald-300">
                      5. SQL Databases
                    </span>{" "}
                    <span className="text-slate-400">(MySQL, Oracle)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
