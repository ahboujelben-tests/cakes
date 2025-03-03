import express from "express";
import { createCake } from "./createCake.js";
import { listCakes } from "./listCakes.js";

export const cakesRouter = express.Router();

cakesRouter.get("/", listCakes);
cakesRouter.post("/", createCake);
