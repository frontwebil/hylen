import {
  ADMIN_SESSION_COOKIE,
  verifyAdminCookie,
} from "@/lib/adminAuth";
import { isEditableCatalogSlug } from "@/lib/catalogSlug";
import prisma from "@/lib/prisma";
import type { ProductPageData } from "@/Types/productData";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

function isRoughlyProductPageData(v: unknown): v is ProductPageData {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (!o.hero || typeof o.hero !== "object") return false;
  if (!Array.isArray(o.products)) return false;
  return true;
}

async function unauthorizedIfNeeded(): Promise<NextResponse | null> {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminCookie(token)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const unauthorized = await unauthorizedIfNeeded();
  if (unauthorized) return unauthorized;

  const { slug } = await ctx.params;
  if (!isEditableCatalogSlug(slug)) {
    return NextResponse.json({ message: "Unknown slug" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const data =
    body && typeof body === "object" && "data" in body
      ? (body as { data?: unknown }).data
      : body;

  if (!isRoughlyProductPageData(data)) {
    return NextResponse.json(
      {
        message:
          "Body must match ProductPageData shape (nested hero object, products array)",
      },
      { status: 400 },
    );
  }

  await prisma.productPageContent.upsert({
    where: { slug },
    create: { slug, data: data as object },
    update: { data: data as object },
  });

  revalidatePath("/");
  revalidatePath(slug.startsWith("/") ? slug : "/" + slug);

  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const unauthorized = await unauthorizedIfNeeded();
  if (unauthorized) return unauthorized;

  const { slug } = await ctx.params;
  if (!isEditableCatalogSlug(slug)) {
    return NextResponse.json({ message: "Unknown slug" }, { status: 404 });
  }

  try {
    await prisma.productPageContent.delete({
      where: { slug },
    });
  } catch {
    /** row may not exist */
  }

  revalidatePath("/");
  revalidatePath(slug.startsWith("/") ? slug : "/" + slug);

  return NextResponse.json({ ok: true, slug });
}
