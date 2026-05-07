import { getSiteSettings } from "@/lib/siteSettings";
import { NextResponse } from "next/server";

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json({ settings });
}
