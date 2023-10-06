import express from "express";
import cors from "cors";
import userRoutes from "../public/routes/swapi/user.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);

export default app;
