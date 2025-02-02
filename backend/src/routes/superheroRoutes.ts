import express from "express";

import { addHero, getHeroes } from "../controllers/superheroController";
import { validateSuperhero } from "../middlewares/validateSuperhero";

const router = express.Router();

router.get('/superheroes', getHeroes);
router.post('/superheroes', validateSuperhero, addHero);

export default router;