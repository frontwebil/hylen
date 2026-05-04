import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "hylen_admin_sess";

function sessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    process.env.ADMIN_PASSWORD ??
    ""
  );
}

export function createAdminSessionCookieValue(): string {
  const secret = sessionSecret();
  if (!secret) {
    throw new Error("Set ADMIN_PASSWORD or ADMIN_SESSION_SECRET for admin login");
  }
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
  const payload = Buffer.from(JSON.stringify({ exp }), "utf8").toString("base64url");
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyAdminCookie(value: string | undefined): boolean {
  if (!value) return false;
  const secret = sessionSecret();
  if (!secret) return false;
  const dot = value.indexOf(".");
  if (dot < 0) return false;
  const payload = value.slice(0, dot);
  const sig = value.slice(dot + 1);
  if (!payload || !sig) return false;
  try {
    const expectedSig = createHmac("sha256", secret).update(payload).digest("base64url");
    const a = Buffer.from(expectedSig);
    const b = Buffer.from(sig);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    const json = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    const exp = json?.exp;
    if (typeof exp !== "number" || exp < Math.floor(Date.now() / 1000)) return false;
    return true;
  } catch {
    return false;
  }
}

export function verifyAdminPassword(candidate: string | undefined): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected.trim() || typeof candidate !== "string") return false;
  try {
    const a = Buffer.from(candidate);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
