"use client";

import { FormEvent, useState } from "react";
import { Section } from "./section";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please set your EmailJS environment variables.",
      });
      return;
    }

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message,
        },
        PUBLIC_KEY,
      );

      setStatus({ type: "success", message: "Message sent successfully. I will get back to you." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about your next project"
      subtitle="Share a bit about what you are building or optimizing, and I will respond with ideas and next steps."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-black/40">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, problem, or idea..."
              rows={5}
              className="mt-1 resize-none"
              required
            />
          </div>

          {status.type === "success" && (
            <p className="rounded-xl bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300">
              {status.message}
            </p>
          )}
          {status.type === "error" && (
            <p className="rounded-xl bg-red-500/10 px-3 py-2 text-xs font-medium text-red-300">
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="btn-primary mt-2 disabled:opacity-70"
          >
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <aside className="space-y-4 text-sm text-slate-300">
          <div className="card-subtle space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Direct contact
            </p>
            <p className="text-sm">
              You can also reach me directly by email for collaboration, backend consulting, or
              automation work.
            </p>
            <a
              href="mailto:mnegi0876@gmail.com"
              className="inline-flex items-center text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              mnegi0876@gmail.com
            </a>
          </div>
          <div className="text-xs text-slate-500">
            EmailJS uses client-side delivery. No backend or server deployment is required for this
            form to work—just configure your service, template, and public key in environment
            variables.
          </div>
        </aside>
      </div>
    </Section>
  );
}
