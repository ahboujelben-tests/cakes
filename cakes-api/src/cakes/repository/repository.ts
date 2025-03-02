import { Cake } from "@prisma/client";
import { listCakes } from "./listCakes";

interface CakesRepository {
  listCakes: () => Promise<Cake[]>;
  createCake: (cake: Omit<Cake, "id">) => Promise<Cake>;
  getCake: (id: number) => Promise<Cake>;
  updateCake: (id: number, cake: Cake) => Promise<Cake>;
  deleteCake: (id: number) => Promise<void>;
}

export const cakesRepository: CakesRepository = {
  listCakes,
  createCake: () => Promise.resolve({} as Cake),
  getCake: () => Promise.resolve({} as Cake),
  updateCake: () => Promise.resolve({} as Cake),
  deleteCake: () => Promise.resolve(),
};
