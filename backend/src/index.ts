import express from "express";
import cors from "cors";

import superheroRoutes from "./routes/superheroRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// Global middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", superheroRoutes);

// Global error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(error, req, res, next);
});

const PORT = 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server running : http://localhost:${PORT}`);
});