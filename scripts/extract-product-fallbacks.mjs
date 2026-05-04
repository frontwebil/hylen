import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

/** @type {{ slug: string; relAppPath: string; lineStart: number; lineEnd: number }}[] */
const pages = [
  { slug: "hrebet-systemy", relAppPath: "hrebet-systemy/page.tsx", lineStart: 11, lineEnd: 222 },
  {
    slug: "mist-mij-lankamy",
    relAppPath: "mist-mij-lankamy/page.tsx",
    lineStart: 11,
    lineEnd: 133,
  },
  { slug: "rytm-zhyvlennya", relAppPath: "rytm-zhyvlennya/page.tsx", lineStart: 11, lineEnd: 276 },
  { slug: "osnovy-vrojayy", relAppPath: "osnovy-vrojayy/page.tsx", lineStart: 11, lineEnd: 224 },
  { slug: "tyahovyy-vuzol", relAppPath: "tyahovyy-vuzol/page.tsx", lineStart: 11, lineEnd: 533 },
  {
    slug: "zhyvylnyy-potik",
    relAppPath: "zhyvylnyy-potik/page.tsx",
    lineStart: 11,
    lineEnd: 1086,
  },
];

const outDir = path.join(root, "src", "content", "productPages");
fs.mkdirSync(outDir, { recursive: true });

for (const p of pages) {
  const fp = path.join(root, "src", "app", p.relAppPath);
  const lines = fs.readFileSync(fp, "utf8").split(/\r?\n/);
  const slice = lines.slice(p.lineStart - 1, p.lineEnd);

  slice[0] = slice[0].replace(
    /^const pageData: ProductPageData = \{/,
    "export const pageDataFallback: ProductPageData = {",
  );

  const out = [
    'import type { ProductPageData } from "@/Types/productData";',
    "",
    ...slice,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(outDir, `${p.slug}.ts`), out, "utf8");
  console.log(`Wrote ${p.slug}.ts`);
}
