// src/index.ts
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { cakesRouter } from "./cakes/routers/router";
import { logger } from "./logger/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

// Set additional http headers to the response for improved security
app.use(helmet());

// Add body parser middleware
app.use(express.json());

// Compress all responses
app.use(compression());

// Setup cors
app.use(cors());

// Setup logger middleware
app.use(logger());

app.get("/", (req: Request, res: Response) => {
  res.send("You have reached the cakes API");
});

app.use("/api/cakes", cakesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
