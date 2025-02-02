import { heroesSortedByHumility, newHero } from '../models/superheroModel';
import { Request, Response } from 'express';

// GET (Superhero list sorted by humility score)
export const getHeroes = (req: Request, res: Response) => {
  const heroes = heroesSortedByHumility();

  if (heroes.length === 0) {
    res.status(404).json({ message: 'No superheroes found' });
    return;
  }

  res.json(heroes);
};

// POST (Create a new superhero)
export const createHero = (req: Request, res: Response) => {
  const { name, superpower, humilityScore } = req.body;

  newHero({ name, superpower, humilityScore });
  res.status(201).json({ message: `New Superhero ${name}!` });
}