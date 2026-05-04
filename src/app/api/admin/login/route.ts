import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionCookieValue,
  verifyAdminPassword,
} from "@/lib/adminAuth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const password =
      body && typeof body === "object" && "password" in body
        ? (body as { password?: unknown }).password
        : undefined;

    if (!verifyAdminPassword(typeof password === "string" ? password : undefined)) {
      return NextResponse.json({ ok: false, message: "Невірний пароль" }, { status: 401 });
    }

    const token = createAdminSessionCookieValue();
    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch {
    return NextResponse.json({ ok: false, message: "Помилка запиту" }, { status: 400 });
  }
}
