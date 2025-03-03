import express from "express";
import { createCake } from "./createCake.js";
import { deleteCake } from "./deleteCake.js";
import { getCake } from "./getCake.js";
import { listCakes } from "./listCakes.js";
import { updateCake } from "./updateCake.js";

export const cakesRouter = express.Router();

cakesRouter.get("/", listCakes);
cakesRouter.post("/", createCake);
cakesRouter.get("/:id", getCake);
cakesRouter.put("/:id", updateCake);
cakesRouter.delete("/:id", deleteCake);
