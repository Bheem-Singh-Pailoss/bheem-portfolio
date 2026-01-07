"use client";

import { useState } from "react";
import { Experience } from "../types";
import { IExperienceController } from "../interfaces";
import { ExperienceService } from "../services";

export function useExperienceController(): IExperienceController {
  const service = new ExperienceService();
  const [experiences] = useState<Experience[]>(service.getAllExperiences());

  return {
    experiences,
  };
}

