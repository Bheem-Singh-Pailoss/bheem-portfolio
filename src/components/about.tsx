import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Software Engineer with strong backend focus"
      subtitle="I build scalable, secure, and maintainable systems using the MERN stack and modern backend frameworks."
    >
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        <p>
          I am a Software Engineer with 5 years of experience specializing in MERN stack and
          Node.js-based backend systems. I build scalable, secure, and high-performance web
          applications. I also work with Nest.js, Laravel, and Python for backend development and
          automation.
        </p>
      </div>
    </Section>
  );
}
