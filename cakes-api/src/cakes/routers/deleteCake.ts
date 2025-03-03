import { RequestHandler } from "express";
import { logger } from "../../logger/logger";
import { cakesRepository } from "../repository/repository";

export const deleteCake: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await cakesRepository.deleteCake(id);
    res.status(204).send();
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};
