import { Experience } from "../types";

export interface IExperienceService {
  getAllExperiences(): Experience[];
}

export interface IExperienceController {
  experiences: Experience[];
}

