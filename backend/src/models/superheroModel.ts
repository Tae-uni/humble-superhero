const Superhero = require('../types/superhero');

// In-memory storage of superheroes
let superheroes: typeof Superhero[] = [];

const newHero = (hero: typeof Superhero) => {
  superheroes.push(hero);
};

// Return all superheroes sorted by humility score
const heroesSortedByHumility = (): typeof Superhero[] => {
  return [...superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
};

/* Further idea: add a removeHero function to delete a superhero from the list */

module.exports = {
  newHero,
  heroesSortedByHumility,
};