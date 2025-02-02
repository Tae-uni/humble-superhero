import express from "express";

import { createHero, getHeroes } from "../controllers/superheroController";

const router = express.Router();

router.get('/superheroes', getHeroes);
router.post('/superheroes', createHero);

export default router;