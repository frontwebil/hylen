import prisma from "@/lib/prisma";
import {
  DEFAULT_SITE_SETTINGS,
  normalizeSiteSettings,
  SITE_SETTINGS_SLUG,
  type SiteSettings,
} from "@/lib/siteSettings.shared";

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const row = await prisma.productPageContent.findUnique({
      where: { slug: SITE_SETTINGS_SLUG },
      select: { data: true },
    });
    return normalizeSiteSettings(row?.data);
  } catch {
    return DEFAULT_SITE_SETTINGS;
  }
}

export async function saveSiteSettings(next: unknown): Promise<SiteSettings> {
  const normalized = normalizeSiteSettings(next);
  await prisma.productPageContent.upsert({
    where: { slug: SITE_SETTINGS_SLUG },
    create: { slug: SITE_SETTINGS_SLUG, data: normalized as object },
    update: { data: normalized as object },
  });
  return normalized;
}
