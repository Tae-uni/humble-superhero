import express from "express";
import cors from "cors";

import superheroRoutes from "./routes/superheroRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", superheroRoutes);
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(error, req, res, next);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running : http://localhost:${PORT}`);
});