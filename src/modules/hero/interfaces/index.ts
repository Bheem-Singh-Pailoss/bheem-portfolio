import { HeroData } from "../types";

export interface IHeroService {
  getHeroData(): HeroData;
}

export interface IHeroController {
  heroData: HeroData;
}

