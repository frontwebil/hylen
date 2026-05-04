import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { productPageFallbackBySlug } from "@/content/productPages/registry";
import { emptyProductPageTemplate } from "@/lib/emptyProductPage";
import prisma from "@/lib/prisma";
import {
  PRODUCT_PAGE_SLUGS,
  type ProductPageSlug,
} from "@/lib/productCatalog";
import type { ProductPageData } from "@/Types/productData";

export function isBundledProductSlug(s: string): s is ProductPageSlug {
  return (PRODUCT_PAGE_SLUGS as readonly string[]).includes(s);
}

const DEFAULT_ROWS: {
  slug: string;
  titleUk: string;
  titleEn: string;
  subtitleUk: string;
  subtitleEn: string;
  imagePath: string;
  sortOrder: number;
}[] = [
  {
    slug: "hrebet-systemy",
    titleUk: "ХРЕБЕТ СИСТЕМИ",
    titleEn: "HYLEN SPINE",
    subtitleUk: "Одноосні причепи",
    subtitleEn: "Single-axle trailers",
    imagePath: "/Products/1",
    sortOrder: 0,
  },
  {
    slug: "rytm-zhyvlennya",
    titleUk: "РИТМ ЖИВЛЕННЯ",
    titleEn: "HYLEN PULSE",
    subtitleUk: "Кормороздавачі-змішувачі",
    subtitleEn: "Mixer feeder wagons",
    imagePath: "/Products/2",
    sortOrder: 1,
  },
  {
    slug: "mist-mij-lankamy",
    titleUk: "МІСТ МІЖ ЛАНКАМИ",
    titleEn: "HYLEN BRIDGE",
    subtitleUk: "Перевантажувачі зерна",
    subtitleEn: "Grain transfer equipment",
    imagePath: "/Products/3",
    sortOrder: 2,
  },
  {
    slug: "zhyvylnyy-potik",
    titleUk: "Живильний потік",
    titleEn: "HYLEN STREAM",
    subtitleUk: "Цистерни для води та пального",
    subtitleEn: "Water & fuel tanks",
    imagePath: "/Products/4",
    sortOrder: 3,
  },
  {
    slug: "tyahovyy-vuzol",
    titleUk: "ТЯГОВИЙ ВУЗОЛ",
    titleEn: "HYLEN ANCHOR",
    subtitleUk: "Причепи-напівпричепи",
    subtitleEn: "Trailers & semi-trailers",
    imagePath: "/Products/5",
    sortOrder: 4,
  },
  {
    slug: "osnovy-vrojayy",
    titleUk: "ОСНОВИ ВРОЖАЮ",
    titleEn: "HYLEN TERRA",
    subtitleUk: "Ґрунтообробна техніка",
    subtitleEn: "Soil cultivation equipment",
    imagePath: "/Products/6",
    sortOrder: 5,
  },
];

async function seedCatalogIfEmpty(): Promise<void> {
  const count = await prisma.homepageCatalogItem.count();
  if (count > 0) return;
  await prisma.homepageCatalogItem.createMany({ data: DEFAULT_ROWS });
}

export async function getHomepageCatalogRowsOrdered() {
  await seedCatalogIfEmpty();
  return prisma.homepageCatalogItem.findMany({
    orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
  });
}

/** Резерв сторінки: TS-файл для 6 ліній, інакше порожній шаблон + підказки з картки каталогу. */
export async function getFallbackProductPageData(
  slug: string,
): Promise<ProductPageData> {
  if (isBundledProductSlug(slug)) {
    return productPageFallbackBySlug[slug];
  }
  let base = emptyProductPageTemplate(slug);
  try {
    const catalogRow = await prisma.homepageCatalogItem.findUnique({
      where: { slug },
    });
    if (catalogRow) {
      base = catalogRowHydratesHero(base, { ...catalogRow });
    }
  } catch {
    /** ignore */
  }
  return base;
}

/** Відображення динамічної `[slug]` (без статичної папки `app/[slug]/`) лише за наявності каталогу або збереженого контенту. */
export async function dynamicProductRouteIsAllowed(slug: string): Promise<boolean> {
  try {
    const [catalog, content] = await Promise.all([
      prisma.homepageCatalogItem.findUnique({
        where: { slug },
        select: { id: true },
      }),
      prisma.productPageContent.findUnique({
        where: { slug },
        select: { slug: true },
      }),
    ]);
    return !!(catalog || content);
  } catch {
    return false;
  }
}

type CatalogRowLite = {
  slug: string;
  titleUk: string;
  titleEn: string;
  subtitleUk: string;
  subtitleEn: string;
  imagePath: string;
};

function rowToProductItem(row: CatalogRowLite, lang: "uk" | "en"): ProductItem {
  const path = row.slug.startsWith("/") ? row.slug : "/" + row.slug;
  return {
    title:
      lang === "uk" ? row.titleUk : row.titleEn,
    subTitle: lang === "uk" ? row.subtitleUk : row.subtitleEn,
    img: row.imagePath,
    link: path,
  };
}

/** Карусель домашньої та блоку «інші лінії» — одна таблиця, дві локалі. */
export async function getHomepageCatalogGrouped(): Promise<{
  uk: ProductItem[];
  en: ProductItem[];
}> {
  try {
    await seedCatalogIfEmpty();
    const rows = await prisma.homepageCatalogItem.findMany({
      orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
    });
    return {
      uk: rows.map((r) => rowToProductItem(r, "uk")),
      en: rows.map((r) => rowToProductItem(r, "en")),
    };
  } catch {
    const uk = DEFAULT_ROWS.map((r, i) => ({
      title: r.titleUk,
      subTitle: r.subtitleUk,
      img: r.imagePath,
      link: "/" + r.slug,
    }));
    const en = DEFAULT_ROWS.map((r) => ({
      title: r.titleEn,
      subTitle: r.subtitleEn,
      img: r.imagePath,
      link: "/" + r.slug,
    }));
    return { uk, en };
  }
}

export function catalogRowHydratesHero(
  base: ProductPageData,
  row: Pick<
    CatalogRowLite,
    "titleUk" | "titleEn" | "subtitleUk" | "subtitleEn" | "imagePath"
  > &
    Partial<Pick<CatalogRowLite, "slug">>,
): ProductPageData {
  return {
    ...base,
    hero: {
      ...base.hero,
      breadcrums: {
        uk: row.titleUk.trim().toLowerCase(),
        en: row.titleEn.trim().toLowerCase(),
      },
      title: { uk: row.titleUk, en: row.titleEn },
      subTitle: { uk: row.subtitleUk, en: row.subtitleEn },
      cards:
        base.hero.cards?.length ?
          [
            {
              ...base.hero.cards[0],
              img: row.imagePath || base.hero.cards[0].img,
              subTitle: { uk: row.subtitleUk, en: row.subtitleEn },
            },
            ...base.hero.cards.slice(1),
          ]
        : [
            {
              id: (row.slug ?? "hero") + "-card",
              img: row.imagePath,
              subTitle: { uk: row.subtitleUk, en: row.subtitleEn },
            },
          ],
    },
  };
}
