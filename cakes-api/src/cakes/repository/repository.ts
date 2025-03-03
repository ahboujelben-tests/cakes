import { Cake } from "@prisma/client";
import { createCake } from "./createCake";
import { deleteCake } from "./deleteCake";
import { findCakeById } from "./findCakeById";
import { findCakeByName } from "./findCakeByName";
import { listCakes } from "./listCakes";
import { updateCake } from "./updateCake";

interface CakesRepository {
  listCakes: () => Promise<Pick<Cake, "id" | "name" | "imageUrl">[]>;
  createCake: (cake: Omit<Cake, "id">) => Promise<Cake>;
  findCakeById: (id: number) => Promise<Cake | null>;
  findCakeByName: (name: string) => Promise<Cake | null>;
  updateCake: (id: number, cake: Omit<Cake, "id">) => Promise<void>;
  deleteCake: (id: number) => Promise<void>;
}

export const cakesRepository: CakesRepository = {
  listCakes,
  createCake,
  findCakeById,
  findCakeByName,
  updateCake,
  deleteCake,
};
