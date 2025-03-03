import { Cake } from "../types/cake";

class CakesService {
  async getCakes() {
    const response = await fetch("/api/cakes");
    return (await response.json()) as Cake[];
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
}

export class CakesServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "CakesServiceError";
  }
}

export const cakesService = new CakesService();
