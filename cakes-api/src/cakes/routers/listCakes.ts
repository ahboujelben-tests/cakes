import { RequestHandler } from "express";
import { cakesRepository } from "../repository/repository";

export const listCakes: RequestHandler = async (req, res) => {
  const cakes = await cakesRepository.listCakes();
  res.json(cakes);
};
