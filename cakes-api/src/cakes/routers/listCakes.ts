import { RequestHandler } from "express";
import { cakesRepository } from "../repository/repository";

export const listCakes: RequestHandler = async (req, res) => {
  try {
    const cakes = await cakesRepository.listCakes();
    res.json(cakes);
  } catch (error) {
    res.status(500).send();
  }
};
