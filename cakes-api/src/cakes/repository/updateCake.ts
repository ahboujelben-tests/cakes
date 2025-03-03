import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const updateCake = async (
  id: number,
  cake: Omit<Cake, "id">,
): Promise<void> => {
  await prisma.cake.update({
    where: {
      id: id,
    },
    data: cake,
  });
};
