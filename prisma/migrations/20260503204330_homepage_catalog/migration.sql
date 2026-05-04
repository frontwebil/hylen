-- CreateTable
CREATE TABLE "HomepageCatalogItem" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "titleUk" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "subtitleUk" TEXT NOT NULL,
    "subtitleEn" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "HomepageCatalogItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomepageCatalogItem_slug_key" ON "HomepageCatalogItem"("slug");
