import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

// Global Error handler middleware
export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      error:
        "Invalid request data. Please check your data.",
      details: error.errors.map(e => ({
        field: e.path.join("."),
        issue: e.message,
      })),
    });
  }

  res.status(error.status || 500).json({
    error: {
      message: error.message || "Internal Server Error",
    },
  });
};