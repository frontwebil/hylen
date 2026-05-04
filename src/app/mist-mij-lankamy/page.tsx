import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import { pageDataFallback } from "@/content/productPages/mist-mij-lankamy";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";

export default async function Page() {
  const [pageData, carouselByLang] = await Promise.all([
    resolveProductPage("mist-mij-lankamy", pageDataFallback),
    getHomepageCatalogGrouped(),
  ]);
  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink="/mist-mij-lankamy"
      carouselByLang={carouselByLang}
    />
  );
}
