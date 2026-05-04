import type { ProductPageData } from "@/Types/productData";

/** Мінімальний чорновик сторінки лінії, коли ще немає TS-резерву в репозиторії. */
export function emptyProductPageTemplate(slug: string): ProductPageData {
  return {
    hero: {
      breadcrums: {
        uk: slug.replace(/-/g, " "),
        en: slug.replace(/-/g, " "),
      },
      title: { uk: "", en: "" },
      subTitle: { uk: "", en: "" },
      text: {
        uk: "",
        en: "",
      },
      cards: [
        {
          id: `${slug}-hero`,
          img: "/",
          subTitle: { uk: "", en: "" },
        },
      ],
    },
    products: [
      {
        id: `${slug}-primary`,
        title: { uk: "", en: "" },
        modelCards: { uk: [], en: [] },
        isCustomDesign: false,
        video: "",
        videoPreview: "",
        description: {
          about: { uk: "", en: "" },
          purpose: { uk: "", en: "" },
          features: { uk: "", en: "" },
          advantages: { uk: [], en: [] },
        },
        images: [],
        specs: {
          models: { uk: ["—"], en: ["—"] },
          rows: [],
        },
      },
    ],
  };
}
