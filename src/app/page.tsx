import { MainLayout } from "@/partials/main-layout";
import { HeroView } from "@/modules/hero";
import { SkillsView } from "@/modules/skills";
import { ExperienceView } from "@/modules/experience";
import { ProjectsView } from "@/modules/projects";
import { ContactView } from "@/modules/contact";

export default function Home() {
  return (
    <MainLayout>
      <HeroView />
      <SkillsView />
      <ExperienceView />
      <ProjectsView />
      <ContactView />
    </MainLayout>
  );
}
