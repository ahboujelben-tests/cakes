import { Cake } from "../types/cake";

class CakesService {
  async getCakes() {
    const response = await fetch("/api/cakes");
    return (await response.json()) as Cake[];
  }
}

export const cakesService = new CakesService();
