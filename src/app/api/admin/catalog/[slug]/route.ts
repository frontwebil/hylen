import {
  ADMIN_SESSION_COOKIE,
  verifyAdminCookie,
} from "@/lib/adminAuth";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

async function unauthorized(): Promise<NextResponse | null> {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminCookie(token)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const u = await unauthorized();
  if (u) return u;

  const { slug } = await ctx.params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const data: Record<string, string | number> = {};
  const str = (k: string): string | undefined =>
    typeof b[k] === "string" ? (b[k] as string).trim() : undefined;
  const num = (k: string): number | undefined =>
    typeof b[k] === "number" && Number.isFinite(b[k] as number)
      ? Math.trunc(b[k] as number)
      : undefined;

  const titleUk = str("titleUk");
  const titleEn = str("titleEn");
  const subtitleUk = str("subtitleUk");
  const subtitleEn = str("subtitleEn");
  const imagePath = str("imagePath");

  if (titleUk !== undefined) data.titleUk = titleUk;
  if (titleEn !== undefined) data.titleEn = titleEn;
  if (subtitleUk !== undefined) data.subtitleUk = subtitleUk;
  if (subtitleEn !== undefined) data.subtitleEn = subtitleEn;
  if (imagePath !== undefined) data.imagePath = imagePath || "/Products/1";
  const so = num("sortOrder");
  if (so !== undefined) data.sortOrder = so;

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ message: "Немає полів для оновлення" }, { status: 400 });
  }

  try {
    const row = await prisma.homepageCatalogItem.update({
      where: { slug },
      data,
    });

    revalidatePath("/");

    const path = slug.startsWith("/") ? slug : "/" + slug;
    revalidatePath(path);

    return NextResponse.json({ ok: true, row });
  } catch {
    return NextResponse.json({ message: "Не знайдено запису" }, { status: 404 });
  }
}

export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const u = await unauthorized();
  if (u) return u;

  const { slug } = await ctx.params;

  try {
    await prisma.homepageCatalogItem.delete({ where: { slug } });

    revalidatePath("/");

    const path = slug.startsWith("/") ? slug : "/" + slug;
    revalidatePath(path);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Не знайдено" }, { status: 404 });
  }
}
