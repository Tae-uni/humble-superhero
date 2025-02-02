import { Request, Response } from "express";

import { heroesSortedByHumility, isHeroExist, newHero } from "../models/superheroModel";

export const getHeroes = (req: Request, res: Response) => {
  // return all superheroes sorted by humility score
  const heroes = heroesSortedByHumility();

  if (heroes.length === 0) {
    res.status(404).json({ message: 'No superheroes found' });
    return;
  }

  res.status(200).json({ heroes });
};

export const addHero = (req: Request, res: Response): void => {
  const { name, superpower, humilityScore } = req.body;

  if (isHeroExist(name)) {
    res.status(400).json({ message: `Superhero ${name} already exists!` });
    return;
  }

  newHero({ name, superpower, humilityScore });
  res.status(201).json({ message: `New Superhero ${name} added!` });
  return;
};