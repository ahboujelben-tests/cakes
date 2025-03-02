// src/index.ts
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "You have reached the cakes API" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
