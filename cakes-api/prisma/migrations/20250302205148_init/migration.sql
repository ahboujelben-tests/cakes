-- CreateTable
CREATE TABLE "Cake" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "yumFactor" INTEGER NOT NULL,

    CONSTRAINT "Cake_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cake_name_key" ON "Cake"("name");

-- Set constaints
Alter Table "Cake" Add Constraint yumFactor CHECK ("yumFactor" >= 1 AND "yumFactor" <= 5);