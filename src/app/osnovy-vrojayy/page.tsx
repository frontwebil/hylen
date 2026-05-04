import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import { pageDataFallback } from "@/content/productPages/osnovy-vrojayy";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";

export default async function Page() {
  const [pageData, carouselByLang] = await Promise.all([
    resolveProductPage("osnovy-vrojayy", pageDataFallback),
    getHomepageCatalogGrouped(),
  ]);
  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink="/osnovy-vrojayy"
      carouselByLang={carouselByLang}
    />
  );
}
