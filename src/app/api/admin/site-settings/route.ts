import { ADMIN_SESSION_COOKIE, verifyAdminCookie } from "@/lib/adminAuth";
import { getSiteSettings, saveSiteSettings } from "@/lib/siteSettings";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function unauthorizedIfNeeded(): Promise<NextResponse | null> {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminCookie(token)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const unauthorized = await unauthorizedIfNeeded();
  if (unauthorized) return unauthorized;
  const settings = await getSiteSettings();
  return NextResponse.json({ settings });
}

export async function PUT(req: Request) {
  const unauthorized = await unauthorizedIfNeeded();
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const payload =
    body && typeof body === "object" && "settings" in body
      ? (body as { settings?: unknown }).settings
      : body;

  const settings = await saveSiteSettings(payload);

  revalidatePath("/");
  revalidatePath("/payment");
  revalidatePath("/delivery");
  revalidatePath("/service");
  revalidatePath("/returns-exchange");

  return NextResponse.json({ ok: true, settings });
}
