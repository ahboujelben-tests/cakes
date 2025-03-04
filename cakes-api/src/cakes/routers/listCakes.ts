import { RequestHandler } from "express";
import { logger } from "../../logger/logger";
import { cakesRepository } from "../repository/repository";

export const listCakes: RequestHandler = async (req, res) => {
  try {
    const cakes = await cakesRepository.listCakes();
    res.json(cakes);
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};
