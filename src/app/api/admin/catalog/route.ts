import {
  ADMIN_SESSION_COOKIE,
  verifyAdminCookie,
} from "@/lib/adminAuth";
import { isEditableCatalogSlug } from "@/lib/catalogSlug";
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

export async function POST(req: Request) {
  const u = await unauthorized();
  if (u) return u;

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
  const slug = typeof b.slug === "string" ? b.slug.trim() : "";

  const titleUk = typeof b.titleUk === "string" ? b.titleUk.trim() : "";
  const titleEn = typeof b.titleEn === "string" ? b.titleEn.trim() : "";
  const subtitleUk = typeof b.subtitleUk === "string" ? b.subtitleUk.trim() : "";
  const subtitleEn = typeof b.subtitleEn === "string" ? b.subtitleEn.trim() : "";
  const imagePath =
    typeof b.imagePath === "string" && b.imagePath.trim()
      ? b.imagePath.trim()
      : "/Products/1";

  let sortOrder = 999;
  if (typeof b.sortOrder === "number" && Number.isFinite(b.sortOrder)) {
    sortOrder = Math.trunc(b.sortOrder);
  }

  if (!isEditableCatalogSlug(slug)) {
    return NextResponse.json(
      { message: "Неприпустимий slug або зарезервований шлях" },
      { status: 400 },
    );
  }

  if (!titleUk || !titleEn || !subtitleUk || !subtitleEn) {
    return NextResponse.json(
      { message: "Заповніть усі текстові поля картки" },
      { status: 400 },
    );
  }

  try {
    const row = await prisma.homepageCatalogItem.create({
      data: {
        slug,
        titleUk,
        titleEn,
        subtitleUk,
        subtitleEn,
        imagePath,
        sortOrder,
      },
    });

    revalidatePath("/");

    const path = slug.startsWith("/") ? slug : "/" + slug;
    revalidatePath(path);

    return NextResponse.json({ ok: true, row });
  } catch {
    return NextResponse.json(
      { message: "Можливо, такий slug уже існує" },
      { status: 409 },
    );
  }
}
