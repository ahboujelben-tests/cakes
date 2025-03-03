import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const findCakeByName = async (name: string): Promise<Cake | null> => {
  const cake = await prisma.cake.findUnique({
    where: {
      name,
    },
  });

  return cake;
};
