"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { useExperienceController } from "../controllers";
import { staggerContainer, staggerItem, viewportSettings } from "@/utils/animations";

export function ExperienceView() {
  const { experiences } = useExperienceController();

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      subtitle="Timeline of roles where I have built production systems, dashboards, and automation workflows."
    >
      <motion.ol
        className="relative border-l border-slate-300/30 dark:border-slate-700/70 pl-6 text-sm text-slate-700 dark:text-slate-200"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {experiences.map((exp, idx) => (
          <motion.li
            key={exp.company}
            variants={staggerItem}
            className="mb-10 last:mb-0"
          >
            <motion.div
              className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-emerald-500 dark:border-emerald-300 bg-slate-50 dark:bg-slate-950"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 200 }}
            />
            <motion.div
              className="card-subtle"
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="heading-md">{exp.company}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
                    {exp.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">{exp.period}</p>
              </div>
              <ul className="mt-3 grid gap-1.5 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
                {exp.items.map((item, itemIdx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 h-1 w-4 rounded-full bg-emerald-400/80" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
