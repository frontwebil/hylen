import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { productPageFallbackBySlug } from "@/content/productPages/registry";
import { getHomepageCatalogGrouped } from "@/lib/homepageCatalog";
import { PRODUCT_PAGE_SLUGS } from "@/lib/productCatalog";
import { resolveProductPage } from "@/lib/productCatalog";
import { pickLocale, pickLocaleList } from "@/Types/productData";
import { SearchResultsClient } from "./SearchResultsClient";

type SearchItem = ProductItem & { searchText: string };

function stripWebpExtension(path: string): string {
  return path.endsWith(".webp") ? path.slice(0, -".webp".length) : path;
}

function modelsSubtitle(models: string[]): string {
  if (!models.length) return "";
  if (models.length === 1) return models[0];
  return `${models[0]} · +${models.length - 1}`;
}

function buildSearchText(parts: Array<string | undefined | null>): string {
  return parts.filter(Boolean).join(" ");
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const queryRaw = sp.q;
  const query = Array.isArray(queryRaw) ? queryRaw[0] ?? "" : queryRaw ?? "";
  const catalogByLang = await getHomepageCatalogGrouped();

  const pages = await Promise.all(
    PRODUCT_PAGE_SLUGS.map(async (slug) => {
      const fallback = productPageFallbackBySlug[slug];
      const data = await resolveProductPage(slug, fallback);
      return { slug, data };
    }),
  );

  const itemsByLang: { uk: SearchItem[]; en: SearchItem[] } = {
    uk: catalogByLang.uk.map((x) => ({
      ...x,
      searchText: buildSearchText([x.title, x.subTitle, x.link]),
    })),
    en: catalogByLang.en.map((x) => ({
      ...x,
      searchText: buildSearchText([x.title, x.subTitle, x.link]),
    })),
  };

  for (const { slug, data } of pages) {
    for (const product of data.products) {
      const preview =
        product.videoPreview ?? product.images[0] ?? "/Products/1.webp";

      const modelsUk = pickLocaleList(product.modelCards, "uk");
      const modelsEn = pickLocaleList(product.modelCards, "en");

      itemsByLang.uk.push({
        title: pickLocale(product.title, "uk"),
        subTitle: modelsSubtitle(pickLocaleList(product.modelCards, "uk")),
        img: stripWebpExtension(preview),
        link: `/${slug}#${product.id}`,
        searchText: buildSearchText([
          pickLocale(product.title, "uk"),
          modelsUk.join(" "),
          product.id,
          slug,
        ]),
      });

      itemsByLang.en.push({
        title: pickLocale(product.title, "en"),
        subTitle: modelsSubtitle(pickLocaleList(product.modelCards, "en")),
        img: stripWebpExtension(preview),
        link: `/${slug}#${product.id}`,
        searchText: buildSearchText([
          pickLocale(product.title, "en"),
          modelsEn.join(" "),
          product.id,
          slug,
        ]),
      });
    }
  }

  return (
    <>
      <Header />
      <SearchResultsClient itemsByLang={itemsByLang} query={query} />
      <Footer />
    </>
  );
}
