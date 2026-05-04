/** Сегменти URL, які не можна використовувати як slug лінійки продуктів. */
const RESERVED = new Set([
  "_next",
  "about",
  "admin",
  "api",
  "contact",
  "favicon.ico",
  "products",
  "robots.txt",
  "sitemap.xml",
]);

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isEditableCatalogSlug(seg: string): boolean {
  if (!seg || seg.length > 80) return false;
  if (!SLUG_PATTERN.test(seg)) return false;
  return !RESERVED.has(seg);
}
