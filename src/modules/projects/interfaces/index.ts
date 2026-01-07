import { Project } from "../types";

export interface IProjectsService {
  getAllProjects(): Project[];
  getProjectById(id: string): Project | undefined;
}

export interface IProjectsController {
  projects: Project[];
  activeProject: Project | null;
  setActiveProject(project: Project | null): void;
}

