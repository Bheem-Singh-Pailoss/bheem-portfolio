"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { useSkillsController } from "../controllers";
import { staggerContainer, staggerItem, cardHover, viewportSettings } from "@/utils/animations";

export function SkillsView() {
  const { skills } = useSkillsController();

  const skillCategories = [
    { title: "Core Technologies", items: skills.core, color: "emerald", badge: "MERN" },
    { title: "Frameworks", items: skills.frameworks, color: "cyan" },
    { title: "Databases", items: skills.databases, color: "sky" },
    { title: "Tools & Platforms", items: skills.tools, color: "violet" },
  ];

  const getColorClasses = (color: string) => {
    const classes = {
      emerald: {
        hover: "hover:border-emerald-400/40",
        dot: "bg-emerald-400",
      },
      cyan: {
        hover: "hover:border-cyan-400/40",
        dot: "bg-cyan-400",
      },
      sky: {
        hover: "hover:border-sky-400/40",
        dot: "bg-sky-400",
      },
      violet: {
        hover: "hover:border-violet-400/40",
        dot: "bg-violet-400",
      },
    };
    return classes[color as keyof typeof classes] || classes.emerald;
  };

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Core technologies and tools I work with"
      subtitle="MERN is my primary stack, with strong backend experience across Node.js, Nest.js, Laravel, and Python."
    >
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {skillCategories.map((category) => {
          const colorClasses = getColorClasses(category.color);
          return (
            <motion.article
              key={category.title}
              variants={staggerItem}
              whileHover={cardHover}
              className={`rounded-2xl border border-slate-200/20 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/60 p-5 backdrop-blur transition ${colorClasses.hover}`}
            >
            <header className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              {category.badge && (
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  {category.badge}
                </span>
              )}
            </header>

            <ul className={`grid gap-2 text-sm text-slate-700 dark:text-slate-300 ${category.title === "Databases" ? "grid-cols-2" : ""}`}>
              {category.items.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${colorClasses.dot}`} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
