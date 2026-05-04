import type { ProductPageData } from "@/Types/productData";
import prisma from "@/lib/prisma";

/** URL paths for product categories (routes under src/app). */
export const PRODUCT_PAGE_SLUGS = [
  "hrebet-systemy",
  "mist-mij-lankamy",
  "rytm-zhyvlennya",
  "osnovy-vrojayy",
  "tyahovyy-vuzol",
  "zhyvylnyy-potik",
] as const;

export type ProductPageSlug = (typeof PRODUCT_PAGE_SLUGS)[number];

export function isProductPageSlug(s: string): s is ProductPageSlug {
  return (PRODUCT_PAGE_SLUGS as readonly string[]).includes(s);
}

function isRoughlyProductPageData(v: unknown): v is ProductPageData {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (!o.hero || typeof o.hero !== "object") return false;
  if (!Array.isArray(o.products)) return false;
  return true;
}

export async function resolveProductPage(
  slug: string,
  fallback: ProductPageData,
): Promise<ProductPageData> {
  try {
    const row = await prisma.productPageContent.findUnique({
      where: { slug },
    });
    if (row?.data != null && isRoughlyProductPageData(row.data)) {
      return row.data;
    }
  } catch (e) {
    const code =
      e &&
      typeof e === "object" &&
      "code" in e &&
      typeof (e as { code?: unknown }).code === "string"
        ? (e as { code: string }).code
        : null;
    if (code !== "P2021") {
      console.warn(
        "resolveProductPage(" + slug + ") DB unavailable, using fallback",
        e,
      );
    }
  }
  return fallback;
}
