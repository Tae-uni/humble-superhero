import express from "express";

import { addHero, getHeroes } from "../controllers/superheroController";
import { validateSuperhero } from "../middlewares/validateSuperhero";

const router = express.Router();

/**  
 * @swagger
 * tags:
 *  name: Superheroes
 *  description: API for superheroes
 */

/**
 * @swagger
 * /api/superheroes:
 *  get:
 *    summary: Fetch superheroes sorted by humility score in descending order
 *    tags: [Superheroes]
 *    responses:
 *      200:
 *        description: A list of superheroes
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                heroes:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Superhero'
 * 
 *      404:
 *        description: No superheroes found
 *        content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/ErrorResponse'
 *
 *      500:
 *        description: Internal Server Error
 */

/** 
 * @swagger
 * /api/superheroes:
 *  post:
 *    summary: Add a new superhero
 *    tags: [Superheroes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Superhero'
 *    responses:
 *      201:
 *        description: Successfully added the superhero
 *        content:
 *          application/json:
 *            schema:
 *              type: object  
 *              properties:
 *                message:
 *                  type: string
 *                  example: "New superhero Ironman added"
 * 
 *      400:
 *        description: Bad Request (Invalid input or duplicate name)
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 * 
 *      500:
 *        description: Internal Server Error
 */

router.get('/superheroes', getHeroes);
router.post('/superheroes', validateSuperhero, addHero);

export default router;