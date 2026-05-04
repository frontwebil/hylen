import { ProductAdminEditor } from "@/app/admin/products/[slug]/ProductAdminEditor";
import { CATEGORY_TITLE_UK } from "@/app/admin/products/categoryLabelsUk";
import prisma from "@/lib/prisma";
import { isEditableCatalogSlug } from "@/lib/catalogSlug";
import { getFallbackProductPageData } from "@/lib/homepageCatalog";
import { PRODUCT_PAGE_SLUGS } from "@/lib/productCatalog";
import type { ProductPageData } from "@/Types/productData";
import Link from "next/link";
import { notFound } from "next/navigation";

function isRoughlyProductPageData(v: unknown): v is ProductPageData {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (!o.hero || typeof o.hero !== "object") return false;
  if (!Array.isArray(o.products)) return false;
  return true;
}

export default async function AdminSingleProductPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  if (!isEditableCatalogSlug(slug)) notFound();

  const fallback = await getFallbackProductPageData(slug);
  const fallbackPretty = `${JSON.stringify(fallback, null, 2)}\n`;

  let row:
    | { data: unknown; updatedAt: Date }
    | null = null;

  try {
    row = await prisma.productPageContent.findUnique({
      where: { slug },
      select: { data: true, updatedAt: true },
    });
  } catch {
    row = null;
  }

  const dbData =
    row?.data != null && isRoughlyProductPageData(row.data) ? row.data : null;
  const effective = dbData ?? fallback;

  let initialJson: string;
  try {
    initialJson = `${JSON.stringify(effective as object, null, 2)}\n`;
  } catch {
    initialJson = fallbackPretty;
  }

  const editorKey = row?.updatedAt?.toISOString() ?? "repo-fallback";

  let catalogTitle: string | null = null;
  try {
    const c = await prisma.homepageCatalogItem.findUnique({
      where: { slug },
      select: { titleUk: true },
    });
    catalogTitle = c?.titleUk ?? null;
  } catch {
    catalogTitle = null;
  }

  const bundled = (PRODUCT_PAGE_SLUGS as readonly string[]).includes(slug);

  const headingUk =
    catalogTitle ??
    (bundled ?
      CATEGORY_TITLE_UK[slug as keyof typeof CATEGORY_TITLE_UK]
    : slug);

  return (
    <>
      <p style={{ margin: "0 0 16px" }}>
        <Link href="/admin/products">← Каталог на головній</Link>
      </p>
      <h1 className="admin-editor-title">{headingUk}</h1>
      {!bundled ?
        <p className="admin-panel-intro">
          Новий slug: статичної папки в коді немає — сайт використовує маршрут{" "}
          <code>{`/${slug}`}</code> і контент із бази або цей чорновик нижче.
        </p>
      : null}

      <ProductAdminEditor
        key={editorKey}
        slug={slug}
        initialJson={initialJson}
        fallbackPretty={fallbackPretty}
        hadDatabaseCopy={dbData !== null}
      />
    </>
  );
}
