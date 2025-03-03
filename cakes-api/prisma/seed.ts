import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  return prisma.cake.createMany({
    data: [
      {
        name: "Chocolate Fudge Cake",
        comment: "Delicious and rich chocolate cake with a fudgy texture.",
        imageUrl: "/cakes/chocolate-fudge.webp",
        yumFactor: 5,
      },
      {
        name: "Carrot Cake",
        comment:
          "Yummy carrot cake with a hint of cinnamon and cream cheese frosting.",
        imageUrl: "/cakes/carrot-cake.webp",
        yumFactor: 4,
      },
      {
        name: "Vanilla Sponge",
        comment: "Tasty vanilla sponge cake, light and fluffy.",
        imageUrl: "/cakes/vanilla-sponge.webp",
        yumFactor: 3,
      },
      {
        name: "Lemon Drizzle",
        comment: "Scrumptious lemon drizzle cake with a zesty lemon glaze.",
        imageUrl: "/cakes/lemon-drizzle.webp",
        yumFactor: 4,
      },
      {
        name: "Banana Bread",
        comment: "Heavenly banana bread, moist and full of banana flavor.",
        imageUrl: "/cakes/banana-bread.webp",
        yumFactor: 5,
      },
      {
        name: "Red Velvet",
        comment: "Divine red velvet cake with a smooth cream cheese frosting.",
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
