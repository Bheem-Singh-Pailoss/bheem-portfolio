import { Project } from "../types";
import { IProjectsService } from "../interfaces";

const projectsData: Project[] = [
  {
    title: "Whale Watcher",
    stack: "React, Django, MySQL",
    description:
      "Monitoring dashboard that visualizes key metrics and events, backed by a Django REST API and MySQL database.",
  },
  {
    title: "Amazon Multi-ASIN Intelligence Scraper",
    stack: "Python, Selenium",
    description:
      "Scraping engine that aggregates product intelligence across multiple ASINs for research and lead generation.",
  },
  {
    title: "Social & Web Scraping Dashboard",
    stack: "React, Python",
    description:
      "Frontend dashboard to control and visualize social media and web scraping jobs with Python-based workers.",
  },
  {
    title: "Twitter Scraping REST API",
    stack: "Django",
    description:
      "RESTful API that exposes structured endpoints for Twitter data scraping and analytics pipelines.",
  },
  {
    title: "Tax Overages Lead Generation System",
    stack: "Python",
    description:
      "Automation system to identify and surface tax overages opportunities, with exportable reports for outreach.",
  },
  {
    title: "Deskpluse",
    stack: "Nest.js, MongoDB",
    description:
      "Backend services for a productivity and communication platform using Nest.js and MongoDB.",
  },
  {
    title: "Auto Reach",
    stack: "Nest.js, MongoDB, Next.js",
    description:
      "Lead engagement and outreach system with a Next.js frontend and Nest.js microservices.",
  },
  {
    title: "Dil Se Indian Restaurant",
    stack: "Laravel, MySQL",
    description:
      "Restaurant web application with menu management, booking flows, and content management built on Laravel.",
  },
];

export class ProjectsService implements IProjectsService {
  getAllProjects(): Project[] {
    return projectsData;
  }

  getProjectById(id: string): Project | undefined {
    return projectsData.find((p) => p.title === id);
  }
}

