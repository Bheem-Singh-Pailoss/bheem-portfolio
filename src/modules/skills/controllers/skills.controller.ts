"use client";

import { useState } from "react";
import { SkillsData } from "../types";
import { ISkillsController } from "../interfaces";
import { SkillsService } from "../services";

export function useSkillsController(): ISkillsController {
  const service = new SkillsService();
  const [skills] = useState<SkillsData>(service.getSkills());

  return {
    skills,
  };
}

