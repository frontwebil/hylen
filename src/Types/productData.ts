export type Language = "uk" | "en";

export type LocalizedText = {
  uk: string;
  en: string;
};

export type LocalizedField = LocalizedText | string;

export type LocalizedListField =
  | { uk: string[]; en: string[] }
  | string[];

export type HeroCard = {
  id: string;
  img: string;
  subTitle: LocalizedField;
};

export type HeroBlock = {
  breadcrums: LocalizedField;
  title: LocalizedField;
  subTitle: LocalizedField;
  text: LocalizedField;
  cards: HeroCard[];
};

export type ProductDescription = {
  about: LocalizedField;
  purpose: LocalizedField;
  features: LocalizedField;
  advantages: LocalizedListField;
};

export type ProductSpecRow = {
  label: LocalizedField;
  values: LocalizedField[];
};

export type ProductSpecs = {
  models: LocalizedListField;
  rows: ProductSpecRow[];
};

export type ProductData = {
  id: string;
  title: LocalizedField;
  modelCards: LocalizedListField;
  isCustomDesign: boolean;
  video: string;
  videoPreview: string;
  description: ProductDescription;
  images: string[];
  specs: ProductSpecs;
};

export type ProductPageData = {
  hero: HeroBlock;
  products: ProductData[];
};

export function pickLocale(
  value: LocalizedField | undefined,
  language: Language,
): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[language] ?? value.uk ?? value.en ?? "";
}

export function pickLocaleList(
  value: LocalizedListField | undefined,
  language: Language,
): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value[language] ?? value.uk ?? value.en ?? [];
}
