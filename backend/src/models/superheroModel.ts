import { Superhero } from "../types/superhero";

// In-memory storage of superheros
let superheroes: Superhero[] = [];

// Add a new superhero to the list
// - No db, so the data is stored in-memory
export const newHero = (hero: Superhero): void => {
  superheroes.push(hero);
};

// Return all superheros sorted by humility score (DESC)
export const heroesSortedByHumility = (): Superhero[] => {
  return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
};

// Check if a superhero name exists
export const isHeroExist = (name: string): boolean => {
  return superheroes.some(hero => hero.name.toLowerCase() === name.toLowerCase());
};

/* Further idea: add a removeHero function to delete a superhero from the list */