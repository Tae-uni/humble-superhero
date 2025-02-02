import { NextFunction, Request, Response } from "express";
import { z } from "zod";

// Superhero validation schema with Zod
// - Ensures humility score is an integer between 1 and 10
const superheroSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be at most 20 characters or less"),
  superpower: z.string()
    .min(2, "The superpower must be at least 2 characters")
    .max(20, "The superpower must be 20 characters or less"),
  humilityScore: z.number()
    .int("The humility score must be an integer")
    .min(1, "The humility score cannot be lower than 1")
    .max(10, "The Humility score cannot be higher than 10"),
});

// Middleware for Validate the superhero data 
// - Ensures valid input using Zod
export const validateSuperhero = (req: Request, res: Response, next: NextFunction) => {
  const validationResult = superheroSchema.safeParse(req.body);

  if (validationResult.success) {
    next();
  } else {
    next(validationResult.error);
  }
};