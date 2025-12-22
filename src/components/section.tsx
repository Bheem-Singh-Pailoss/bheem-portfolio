"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8"
        >
          <header className="max-w-3xl space-y-3">
            {eyebrow && <p className="section-title">{eyebrow}</p>}
            <h2 className="heading-lg">{title}</h2>
            {subtitle && <p className="text-muted max-w-xl">{subtitle}</p>}
          </header>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
