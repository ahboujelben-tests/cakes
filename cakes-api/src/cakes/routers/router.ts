import express from "express";
import { listCakes } from "./listCakes.js";

export const cakesRouter = express.Router();

cakesRouter.get("/", listCakes);
