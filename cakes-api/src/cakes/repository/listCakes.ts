import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const listCakes = async (): Promise<Cake[]> => {
  const cakes = await prisma.cake.findMany();
  return cakes;
};
