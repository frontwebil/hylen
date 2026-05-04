import type { ProductPageSlug } from "@/lib/productCatalog";
import type { ProductPageData } from "@/Types/productData";
import { pageDataFallback as fbHrebet } from "./hrebet-systemy";
import { pageDataFallback as fbMist } from "./mist-mij-lankamy";
import { pageDataFallback as fbOsnovy } from "./osnovy-vrojayy";
import { pageDataFallback as fbRytm } from "./rytm-zhyvlennya";
import { pageDataFallback as fbTyahovyy } from "./tyahovyy-vuzol";
import { pageDataFallback as fbZhyvylnyy } from "./zhyvylnyy-potik";

export const productPageFallbackBySlug: Record<ProductPageSlug, ProductPageData> = {
  "hrebet-systemy": fbHrebet,
  "mist-mij-lankamy": fbMist,
  "rytm-zhyvlennya": fbRytm,
  "osnovy-vrojayy": fbOsnovy,
  "tyahovyy-vuzol": fbTyahovyy,
  "zhyvylnyy-potik": fbZhyvylnyy,
};
