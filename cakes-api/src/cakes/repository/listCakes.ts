import { Cake } from "@prisma/client";
import { prisma } from "./client";

export const listCakes = async (): Promise<
  Pick<Cake, "id" | "name" | "imageUrl">[]
> => {
  const cakes = await prisma.cake.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
    },
    orderBy: {
      id: "desc",
    },
  });
  return cakes;
};
