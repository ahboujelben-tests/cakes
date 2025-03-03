import { Cake } from "@prisma/client";
import { createCake } from "./createCake";
import { findCakeByName } from "./findCakeByName";
import { listCakes } from "./listCakes";

interface CakesRepository {
  listCakes: () => Promise<Cake[]>;
  createCake: (cake: Omit<Cake, "id">) => Promise<Cake>;
  findCakeById: (id: number) => Promise<Cake>;
  findCakeByName: (name: string) => Promise<Cake | null>;
  updateCake: (id: number, cake: Cake) => Promise<Cake>;
  deleteCake: (id: number) => Promise<void>;
}

export const cakesRepository: CakesRepository = {
  listCakes,
  createCake,
  findCakeById: () => Promise.resolve({} as Cake),
  findCakeByName,
  updateCake: () => Promise.resolve({} as Cake),
  deleteCake: () => Promise.resolve(),
};
