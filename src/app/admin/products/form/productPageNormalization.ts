import type {
  HeroBlock,
  HeroCard,
  LocalizedField,
  LocalizedListField,
  ProductData,
  ProductDescription,
  ProductPageData,
  ProductSpecRow,
  ProductSpecs,
} from "@/Types/productData";

/** Uniform shape for форм (завжди uk + en окремими полями). */
export type Pair = { uk: string; en: string };

export type NormalHeroCard = {
  id: string;
  img: string;
  subTitle: Pair;
};

export type NormalProductPageData = {
  hero: {
    breadcrums: Pair;
    title: Pair;
    subTitle: Pair;
    text: Pair;
    cards: NormalHeroCard[];
  };
  products: NormalProductData[];
};

export type NormalProductData = {
  id: string;
  title: Pair;
  /** Параметр × моделі (назви моделей у двох мовах, по рядках). */
  modelCards: Pair;
  isCustomDesign: boolean;
  video: string;
  videoPreview: string;
  description: {
    about: Pair;
    purpose: Pair;
    features: Pair;
    /** Паруємо рядки UA/EN; при збереженні довжини можуть вирівнюватися. */
    advantages: Pair;
  };
  images: string[];
  specs: {
    models: Pair;
    rows: {
      label: Pair;
      /** По одній клітинці на модель (як у таблиці на сайті). */
      cellValues: Pair[];
    }[];
  };
};

function lf(f: LocalizedField): Pair {
  if (typeof f === "string") return { uk: f, en: f };
  return { uk: f.uk ?? "", en: f.en ?? "" };
}

/** Рядкові масиви як текстові поля (по одному пункту на рядок); UA та EN узгоджені по довжині. */
function listAsLinesPair(list: LocalizedListField): Pair {
  if (Array.isArray(list)) {
    const txt = list.join("\n");
    return { uk: txt, en: txt };
  }
  const uk = list.uk ?? [];
  const en = list.en ?? [];
  const n = Math.max(uk.length, en.length);
  const pad = (
    xs: readonly string[],
  ): readonly string[] => Array.from({ length: n }, (_, i) => xs[i] ?? "");
  return { uk: pad(uk).join("\n"), en: pad(en).join("\n") };
}

export function pairLinesToLocaleList(p: Pair): { uk: string[]; en: string[] } {
  const uk = p.uk.split(/\r?\n/).map((s) => s.trimEnd());
  const en = p.en.split(/\r?\n/).map((s) => s.trimEnd());
  const strip = (arr: string[]) =>
    arr.length && arr.at(-1) === "" ? arr.slice(0, -1) : arr;
  let uks = strip(uk);
  let ens = strip(en);
  let n = Math.max(uks.length, ens.length);
  if (n === 0) {
    return { uk: [""], en: [""] };
  }
  uks = Array.from({ length: n }, (_, i) => uks[i] ?? "");
  ens = Array.from({ length: n }, (_, i) => ens[i] ?? "");
  return { uk: uks, en: ens };
}

/** Для таблиці характеристик: скільки колонок (моделей) очікуємо за даними продукту. */
export function inferSpecColumnCount(p: ProductData): number {
  const models =
    typeof p.specs.models === "object" && !Array.isArray(p.specs.models)
      ? Math.max((p.specs.models.uk ?? []).length, (p.specs.models.en ?? []).length)
      : (p.specs.models as string[]).length;
  const modelCardsLen =
    typeof p.modelCards === "object" && !Array.isArray(p.modelCards)
      ? Math.max((p.modelCards.uk ?? []).length, (p.modelCards.en ?? []).length)
      : (p.modelCards as string[]).length;
  let rowMax = 0;
  for (const r of p.specs.rows) {
    rowMax = Math.max(rowMax, r.values.length);
  }
  return Math.max(1, models, modelCardsLen, rowMax);
}

export function lfFromPair(p: Pair): LocalizedField {
  if (p.uk === p.en) return p.uk;
  return { uk: p.uk, en: p.en };
}

function llFromPairs(p: Pair): LocalizedListField {
  return pairLinesToLocaleList(p);
}

function valsToCells(v: LocalizedField[]): Pair[] {
  return v.map((x) => lf(x));
}

function cellsToLocalizedFields(cells: Pair[]): LocalizedField[] {
  return cells.map((c) => lfFromPair(c));
}

/** Побудувати клітинки для редактора під кількість моделей. */
export function normalizeSpecRowForEditor(
  row: ProductSpecRow,
  columnCount: number,
): NormalProductData["specs"]["rows"][0] {
  const label = lf(row.label);
  const raw = valsToCells(row.values);
  const padded: Pair[] = Array.from({ length: columnCount }, (_, i) => {
    if (raw[i]) return raw[i];
    return { uk: "", en: "" };
  });
  return { label, cellValues: padded };
}

function denormalSpecRow(row: NormalProductData["specs"]["rows"][0]): ProductSpecRow {
  return {
    label: lfFromPair(row.label),
    values: cellsToLocalizedFields(row.cellValues),
  };
}

export function toNormal(raw: ProductPageData): NormalProductPageData {
  const heroCards: NormalHeroCard[] = raw.hero.cards.map((c: HeroCard) => ({
    id: c.id,
    img: c.img,
    subTitle: lf(c.subTitle),
  }));

  const products: NormalProductData[] = raw.products.map((p: ProductData) => {
    const mc = listAsLinesPair(p.modelCards);
    const modelsPair = listAsLinesPair(p.specs.models);
    const columnCount = inferSpecColumnCount(p);

    const rowsNorm = (p.specs.rows as ProductSpecRow[]).map((r) =>
      normalizeSpecRowForEditor(r, columnCount),
    );

    return {
      id: p.id,
      title: lf(p.title),
      modelCards: mc,
      isCustomDesign: p.isCustomDesign,
      video: p.video,
      videoPreview: p.videoPreview,
      description: {
        about: lf(p.description.about),
        purpose: lf(p.description.purpose),
        features: lf(p.description.features),
        advantages: listAsLinesPair(p.description.advantages),
      },
      images: [...p.images],
      specs: {
        models: modelsPair,
        rows: rowsNorm,
      },
    };
  });

  const h: HeroBlock = raw.hero;
  return {
    hero: {
      breadcrums: lf(h.breadcrums),
      title: lf(h.title),
      subTitle: lf(h.subTitle),
      text: lf(h.text),
      cards: heroCards,
    },
    products,
  };
}

export function toDto(n: NormalProductPageData): ProductPageData {
  return {
    hero: {
      breadcrums: lfFromPair(n.hero.breadcrums),
      title: lfFromPair(n.hero.title),
      subTitle: lfFromPair(n.hero.subTitle),
      text: lfFromPair(n.hero.text),
      cards: n.hero.cards.map((c) => ({
        id: c.id,
        img: c.img.trim(),
        subTitle: lfFromPair(c.subTitle),
      })),
    },
    products: n.products.map((p): ProductData => {
      const specs: ProductSpecs = {
        models: llFromPairs(p.specs.models),
        rows: p.specs.rows.map(denormalSpecRow),
      };
      const desc: ProductDescription = {
        about: lfFromPair(p.description.about),
        purpose: lfFromPair(p.description.purpose),
        features: lfFromPair(p.description.features),
        advantages: llFromPairs(p.description.advantages),
      };
      return {
        id: p.id.trim(),
        title: lfFromPair(p.title),
        modelCards: llFromPairs(p.modelCards),
        isCustomDesign: p.isCustomDesign,
        video: p.video.trim(),
        videoPreview: p.videoPreview.trim(),
        description: desc,
        images: p.images.map((s) => s.trim()).filter(Boolean),
        specs,
      };
    }),
  };
}
