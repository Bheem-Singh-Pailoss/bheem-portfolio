import { Experience } from "../types";
import { IExperienceService } from "../interfaces";

const experiencesData: Experience[] = [
  {
    company: "Bronze Byte IT Solutions",
    period: "May 2025 – Oct 2025",
    role: "Software Engineer · MERN & Backend Services",
    items: [
      "MERN stack development",
      "Node.js + Nest.js backend services",
      "REST APIs, JWT, RBAC",
      "MongoDB optimization",
      "React dashboards",
      "Python automation & scraping",
    ],
  },
  {
    company: "Exotica IT Solutions Pvt Ltd",
    period: "Dec 2022 – Apr 2025",
    role: "Full Stack Developer",
    items: [
      "React, Node.js, Laravel, Django",
      "REST APIs & dashboards",
      "WordPress theme & plugin development",
      "MySQL, MongoDB, Oracle",
    ],
  },
  {
    company: "Unicloud IT Services",
    period: "Aug 2020 – Oct 2022",
    role: "Backend & Integrations Developer",
    items: ["PHP development", "Zoho CRM automation", "Backend integrations"],
  },
];

export class ExperienceService implements IExperienceService {
  getAllExperiences(): Experience[] {
    return experiencesData;
  }
}

