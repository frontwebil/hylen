import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import { pageDataFallback } from "@/content/productPages/hrebet-systemy";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";

export default async function Page() {
  const [pageData, carouselByLang] = await Promise.all([
    resolveProductPage("hrebet-systemy", pageDataFallback),
    getHomepageCatalogGrouped(),
  ]);
  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink="/hrebet-systemy"
      carouselByLang={carouselByLang}
    />
  );
}
