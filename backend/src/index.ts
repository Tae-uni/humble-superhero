import express from "express";
import cors from "cors";

import superheroRoutes from "./routes/superheroRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import { setupSwagger } from "./config/swagger";

const app = express();

// Global middleware
app.use(express.json());
app.use(cors());

setupSwagger(app);

// Routes
app.use("/api", superheroRoutes);

// Global error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(error, req, res, next);
});

const PORT = 3000;
// Start the server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running : http://localhost:${PORT}`);
  });
}

export { app };