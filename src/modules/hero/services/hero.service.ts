import { HeroData } from "../types";
import { IHeroService } from "../interfaces";

const heroData: HeroData = {
  name: "Bheem Singh",
  title: "Software Engineer · MERN Stack",
  subtitle: "Software Engineer I · Backend & Automation",
  description:
    "Software Engineer with 5 years of experience specializing in MERN stack and Node.js backend systems. I build scalable, secure, and high-performance applications using Nest.js, Laravel, and Python for backend development and automation.",
  techStack: [
    "MERN Stack",
    "Node.js Backends",
    "Nest.js",
    "Laravel (PHP)",
    "Python Automation",
  ],
  socialLinks: {
    github: "https://github.com/Bheem-Singh-Pailoss",
    linkedin: "https://linkedin.com/in/bheem-singh-88300a194",
  },
  priorityStack: [
    {
      title: "1. MERN Stack",
      items: ["(Node, Express, React, MongoDB)"],
    },
    {
      title: "2. Nest.js",
      items: [],
    },
    {
      title: "3. Laravel (PHP)",
      items: [],
    },
    {
      title: "4. Python",
      items: ["(Django, Flask, Selenium)"],
    },
    {
      title: "5. SQL Databases",
      items: ["(MySQL, Oracle)"],
    },
  ],
};

export class HeroService implements IHeroService {
  getHeroData(): HeroData {
    return heroData;
  }
}

