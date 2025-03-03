import { Cake } from "../types/cake";

class CakesService {
  async getCakes() {
    const response = await fetch("/api/cakes");
    if (!response.ok) {
      throw new CakesServiceError("Failed to get cakes", response.status);
    }
    return (await response.json()) as Pick<Cake, "id" | "name" | "imageUrl">[];
  }

  async createCake(cake: Omit<Cake, "id">) {
    const response = await fetch("/api/cakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cake),
    });
    if (!response.ok) {
      throw new CakesServiceError("Failed to create cake", response.status);
    }
    return;
  }

  async getCake(id: number) {
    const response = await fetch(`/api/cakes/${id}`);
    if (!response.ok) {
      throw new CakesServiceError("Failed to get cake", response.status);
    }
    return (await response.json()) as Cake;
  }
}

export class CakesServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
    this.name = "CakesServiceError";
  }
}

export const cakesService = new CakesService();
