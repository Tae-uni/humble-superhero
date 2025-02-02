import express from "express";

import { addHero, getHeroes } from "../controllers/superheroController";
import { validateSuperhero } from "../middlewares/validateSuperhero";

const router = express.Router();

// @route GET /api/superheroes
// @desc Get all superheroes sorted by humility score
router.get('/superheroes', getHeroes);

// @route POST /api/superheroes
// @desc Add a new superhero (validates input)
router.post('/superheroes', validateSuperhero, addHero);

export default router;