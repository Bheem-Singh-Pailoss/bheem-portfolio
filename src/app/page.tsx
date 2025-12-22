import { Header } from "@/components/header";
// import { Hero } from "@/components/hero";
// import { Hero } from "@/components/hero";

import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
