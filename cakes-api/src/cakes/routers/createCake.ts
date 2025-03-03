import { RequestHandler } from "express";
import { z } from "zod";
import { cakesRepository } from "../repository/repository";

export const createCake: RequestHandler = async (req, res) => {
  const { name, comment, imageUrl, yumFactor } = req.body;

  // validate request body
  try {
    createCakeBody.parse(req.body);
  } catch (error) {
    res.status(400).send("Invalid request body");
    return;
  }

  try {
    // check if cake name already exists
    const existingCake = await cakesRepository.findCakeByName(name);
    if (existingCake) {
      res.status(409).send("Cake already exists");
      return;
    }

    // proceed to create cake
    await cakesRepository.createCake({
      name,
      comment,
      imageUrl,
      yumFactor,
    });
  } catch (error) {
    res.status(500).send();
  }
  res.status(201).send();
};

const createCakeBody = z.object({
  name: z.string().nonempty({ message: "Name is required." }),
  comment: z
    .string()
    .min(2, {
      message: "Comment must be at least 2 characters.",
    })
    .max(200, {
      message: "Comment must be at most 200 characters.",
    })
    .nonempty({ message: "Comment is required." }),
  imageUrl: z
    .string()
    .url({
      message: "URL must be valid.",
    })
    .nonempty({ message: "Image URL is required." }),
  yumFactor: z.number().int().min(1).max(5),
});
