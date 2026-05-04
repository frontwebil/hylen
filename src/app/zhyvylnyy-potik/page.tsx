import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import { pageDataFallback } from "@/content/productPages/zhyvylnyy-potik";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";

export default async function Page() {
  const [pageData, carouselByLang] = await Promise.all([
    resolveProductPage("zhyvylnyy-potik", pageDataFallback),
    getHomepageCatalogGrouped(),
  ]);
  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink="/zhyvylnyy-potik"
      carouselByLang={carouselByLang}
    />
  );
}
