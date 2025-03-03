import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  return prisma.cake.createMany({
    data: [
      {
        name: "Chocolate Fudge Cake",
        comment: "Delicious",
        imageUrl: "/cakes/chocolate-fudge.webp",
        yumFactor: 5,
      },
      {
        name: "Carrot Cake",
        comment: "Yummy",
        imageUrl: "/cakes/carrot-cake.webp",
        yumFactor: 4,
      },
      {
        name: "Vanilla Sponge",
        comment: "Tasty",
        imageUrl: "/cakes/vanilla-sponge.webp",
        yumFactor: 3,
      },
      {
        name: "Lemon Drizzle",
        comment: "Scrumptious",
        imageUrl: "/cakes/lemon-drizzle.webp",
        yumFactor: 4,
      },
      {
        name: "Banana Bread",
        comment: "Heavenly",
        imageUrl: "/cakes/banana-bread.webp",
        yumFactor: 5,
      },
      {
        name: "Red Velvet",
        comment: "Divine",
        imageUrl: "/cakes/red-velvet.webp",
        yumFactor: 4,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
