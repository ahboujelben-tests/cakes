import { RequestHandler } from "express";
import { logger } from "../../logger/logger";
import { cakesRepository } from "../repository/repository";

export const getCake: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const cake = await cakesRepository.findCakeById(id);
    if (!cake) {
      res.status(404).send();
      return;
    }
    res.json(cake);
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};
