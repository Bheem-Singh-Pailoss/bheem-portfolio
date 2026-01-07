import { SkillsData } from "../types";
import { ISkillsService } from "../interfaces";

const skillsData: SkillsData = {
  core: [
    "Node.js",
    "JavaScript (ES6+)",
    "REST APIs",
    "JWT Authentication",
    "RBAC",
    "Socket.IO",
  ],
  frameworks: [
    "Express.js",
    "Nest.js",
    "React.js",
    "Next.js",
    "Laravel",
    "Django",
    "Flask",
  ],
  databases: ["MongoDB", "MySQL", "Oracle"],
  tools: ["Docker", "Nginx", "PM2", "Git", "GitHub", "Selenium"],
};

export class SkillsService implements ISkillsService {
  getSkills(): SkillsData {
    return skillsData;
  }
}

