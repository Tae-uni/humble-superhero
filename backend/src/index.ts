import express from "express";
import cors from "cors";

import superheroRoutes from "./routes/superheroRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", superheroRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running : http://localhost:${PORT}`);
});