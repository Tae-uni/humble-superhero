import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

// Error handler middleware
export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error instanceof ZodError ? 400 : error.status || 500;
  let message = error.message || "Internal server error";

  if (error instanceof ZodError) {
    message = "Invalid request data. Please check your data.";

    return res.status(statusCode).json({
      error: {
        message,
        details: error.errors.map(e => ({
          field: e.path.join("."),
          issue: e.message,
        })),
      },
    });
  }

  res.status(statusCode).json({
    error: {
      message,
    },
  });
};