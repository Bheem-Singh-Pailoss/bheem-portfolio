"use client";

import { useState } from "react";
import { Project } from "../types";
import { IProjectsController } from "../interfaces";
import { ProjectsService } from "../services";

export function useProjectsController(): IProjectsController {
  const service = new ProjectsService();
  const [projects] = useState<Project[]>(service.getAllProjects());
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return {
    projects,
    activeProject,
    setActiveProject,
  };
}

