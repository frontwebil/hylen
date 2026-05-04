import { ProductCategoryPageClient } from "@/Components/Products/ProductCategoryPageClient";
import {
  dynamicProductRouteIsAllowed,
  getFallbackProductPageData,
  getHomepageCatalogGrouped,
} from "@/lib/homepageCatalog";
import { resolveProductPage } from "@/lib/productCatalog";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const ok = await dynamicProductRouteIsAllowed(slug);
  if (!ok) notFound();

  const [carousel, fallback] = await Promise.all([
    getHomepageCatalogGrouped(),
    getFallbackProductPageData(slug),
  ]);

  const pageData = await resolveProductPage(slug, fallback);

  return (
    <ProductCategoryPageClient
      pageData={pageData}
      excludeLink={`/${slug}`}
      carouselByLang={carousel}
    />
  );
}
