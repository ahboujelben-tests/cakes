import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const findCakeById = async (id: number): Promise<Cake | null> => {
  const cake = await prisma.cake.findUnique({
    where: {
      id,
    },
  });

  return cake;
};
