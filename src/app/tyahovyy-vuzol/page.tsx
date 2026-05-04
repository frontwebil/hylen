import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import { pageDataFallback } from "@/content/productPages/tyahovyy-vuzol";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";

export default async function Page() {
  const [pageData, carouselByLang] = await Promise.all([
    resolveProductPage("tyahovyy-vuzol", pageDataFallback),
    getHomepageCatalogGrouped(),
  ]);
  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink="/tyahovyy-vuzol"
      carouselByLang={carouselByLang}
    />
  );
}
