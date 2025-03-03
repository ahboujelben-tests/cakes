import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const createCake = async (cake: Omit<Cake, "id">): Promise<Cake> => {
  const createdCake = await prisma.cake.create({
    data: cake,
  });

  return createdCake;
};
