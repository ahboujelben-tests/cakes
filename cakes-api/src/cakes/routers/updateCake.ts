import { RequestHandler } from "express";
import { logger } from "../../logger/logger";
import { cakesRepository } from "../repository/repository";
import { cakeBody } from "./createCake";

export const updateCake: RequestHandler = async (req, res) => {
  // validate request body
  try {
    cakeBody.parse(req.body);
  } catch (error) {
    logger.error(error);
    res.status(400).send("Invalid request body");
    return;
  }

  try {
    // check if cake exists
    const id = Number(req.params.id);
    const cake = await cakesRepository.findCakeById(id);
    if (!cake) {
      res.status(404).send();
      return;
    }

    // proceed to update cake
    await cakesRepository.updateCake(id, req.body);
    res.status(204).send();
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};
