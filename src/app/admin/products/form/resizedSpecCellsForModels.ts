import type { NormalProductData } from "@/app/admin/products/form/productPageNormalization";
import { pairLinesToLocaleList } from "@/app/admin/products/form/productPageNormalization";

/** Після зміни рядка «назви моделей» підганяє кількість клітинок у таблиці. */
export function resizedSpecCellsForModels(p: NormalProductData): NormalProductData {
  const { uk, en } = pairLinesToLocaleList(p.specs.models);
  const cols = Math.max(1, uk.length, en.length);
  return {
    ...p,
    specs: {
      ...p.specs,
      rows: p.specs.rows.map((r) => ({
        ...r,
        cellValues: Array.from({ length: cols }, (_, i) => ({
          ...(r.cellValues[i] ?? { uk: "", en: "" }),
        })),
      })),
    },
  };
}
