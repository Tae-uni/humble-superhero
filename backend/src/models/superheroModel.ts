import { Superhero } from '../types/superhero';

// In-memory storage of superheroes
let superheroes: Superhero[] = [];

export const newHero = (hero: Superhero) => {
  superheroes.push(hero);
};

// Return all superheroes sorted by humility score
export const heroesSortedByHumility = (): Superhero[] => {
  return [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
};

/* Further idea: add a removeHero function to delete a superhero from the list */
