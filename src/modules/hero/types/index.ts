export type HeroData = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  socialLinks: {
    github: string;
    linkedin: string;
  };
  priorityStack: {
    title: string;
    items: string[];
  }[];
};

