"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/section";
import { useContactController } from "../controllers";
import { fadeInLeft, fadeInRight, viewportSettings } from "@/utils/animations";

export function ContactView() {
  const { formData, status, handleInputChange, handleSubmit } =
    useContactController();

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about your next project"
      subtitle="Share a bit about what you are building or optimizing, and I will respond with ideas and next steps."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-black/40"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your name"
                className="mt-1"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="you@example.com"
                className="mt-1"
                required
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell me about your project, problem, or idea..."
              rows={5}
              className="mt-1 resize-none"
              required
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {status.type === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300"
              >
                {status.message}
              </motion.p>
            )}
            {status.type === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl bg-red-500/10 px-3 py-2 text-xs font-medium text-red-300"
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={status.type === "loading"}
            whileHover={{ scale: status.type !== "loading" ? 1.02 : 1 }}
            whileTap={{ scale: status.type !== "loading" ? 0.98 : 1 }}
            className="btn-primary mt-2 disabled:opacity-70"
          >
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.aside
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4 text-sm text-slate-700 dark:text-slate-300"
        >
          <motion.div
            className="card-subtle space-y-2"
            whileHover={{ scale: 1.02, x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
              Direct contact
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              You can also reach me directly by email for collaboration, backend
              consulting, or automation work.
            </p>
            <motion.a
              href="mailto:mnegi0876@gmail.com"
              whileHover={{ scale: 1.05, x: 4 }}
              className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 transition hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              mnegi0876@gmail.com
            </motion.a>
          </motion.div>
        </motion.aside>
      </div>
    </Section>
  );
}
