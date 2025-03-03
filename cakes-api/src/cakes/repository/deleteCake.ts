import { prisma } from "./client";

export const deleteCake = async (id: number): Promise<void> => {
  await prisma.cake.delete({
    where: {
      id,
    },
  });
};
