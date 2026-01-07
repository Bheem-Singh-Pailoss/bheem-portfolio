"use client";

import { useState } from "react";
import { HeroData } from "../types";
import { IHeroController } from "../interfaces";
import { HeroService } from "../services";

export function useHeroController(): IHeroController {
  const service = new HeroService();
  const [heroData] = useState<HeroData>(service.getHeroData());

  return {
    heroData,
  };
}

