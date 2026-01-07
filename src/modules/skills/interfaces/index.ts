import { SkillsData } from "../types";

export interface ISkillsService {
  getSkills(): SkillsData;
}

export interface ISkillsController {
  skills: SkillsData;
}

