import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { productPageFallbackBySlug } from "@/content/productPages/registry";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { PRODUCT_PAGE_SLUGS } from "@/lib/productCatalog";
import { resolveProductPage } from "@/lib/productCatalog";
import { pickLocale, pickLocaleList } from "@/Types/productData";
import { SearchResultsClient } from "./SearchResultsClient";

function stripWebpExtension(path: string): string {
  return path.endsWith(".webp") ? path.slice(0, -".webp".length) : path;
}

function modelsSubtitle(models: string[]): string {
  if (!models.length) return "";
  if (models.length === 1) return models[0];
  return `${models[0]} · +${models.length - 1}`;
}

export default async function Page() {
  const catalogByLang = await getHomepageCatalogGrouped();

  const pages = await Promise.all(
    PRODUCT_PAGE_SLUGS.map(async (slug) => {
      const fallback = productPageFallbackBySlug[slug];
      const data = await resolveProductPage(slug, fallback);
      return { slug, data };
    }),
  );

  const itemsByLang: { uk: ProductItem[]; en: ProductItem[] } = {
    uk: [...catalogByLang.uk],
    en: [...catalogByLang.en],
  };

  for (const { slug, data } of pages) {
    for (const product of data.products) {
      const preview =
        product.videoPreview ?? product.images[0] ?? "/Products/1.webp";

      itemsByLang.uk.push({
        title: pickLocale(product.title, "uk"),
        subTitle: modelsSubtitle(pickLocaleList(product.modelCards, "uk")),
        img: stripWebpExtension(preview),
        link: `/${slug}#${product.id}`,
      });

      itemsByLang.en.push({
        title: pickLocale(product.title, "en"),
        subTitle: modelsSubtitle(pickLocaleList(product.modelCards, "en")),
        img: stripWebpExtension(preview),
        link: `/${slug}#${product.id}`,
      });
    }
  }

  return (
    <>
      <Header />
      <SearchResultsClient itemsByLang={itemsByLang} />
      <Footer />
    </>
  );
}
