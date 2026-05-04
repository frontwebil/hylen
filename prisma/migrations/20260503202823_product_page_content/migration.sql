-- CreateTable
CREATE TABLE "ProductPageContent" (
    "slug" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductPageContent_pkey" PRIMARY KEY ("slug")
);
