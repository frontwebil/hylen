"use client";

import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { ProductOtherTypesSlider } from "@/Components/Products/ProductOtherTypesSlider/ProductOtherTypesSlider";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";
import { useLanguage } from "@/Store/useLanguage";

type ProductCardItem = {
  img: string;
  subTitle: string;
  id: string;
};

type ProductDescription = {
  about: string;
  purpose: string;
  features: string;
  advantages: string[];
};

type ProductSpecRow = {
  label: string;
  values: string[];
};

type ProductSpecs = {
  models: string[];
  rows: ProductSpecRow[];
};

type ProductItem = {
  id: string;
  title: string;
  modelCards: string[];
  isCustomDesign: boolean;
  video: string;
  videoPreview: string;
  description: ProductDescription;
  images: string[];
  specs: ProductSpecs;
};

type PageData = {
  hero: {
    breadcrums: string;
    title: string;
    subTitle: string;
    text: string;
    cards: ProductCardItem[];
  };
  products: ProductItem[];
};

export default function Page() {
  const { language } = useLanguage();
  const t: Record<"uk" | "en", PageData> = {
    uk: {
    hero: {
      breadcrums: "міст між ланками",
      title: "МІСТ МІЖ ЛАНКАМИ",
      subTitle: "Перевантажувачі зерна",
      text: "Техніка категорії «Міст між ланками» - це надійний зв'язок між етапами обробки та зберігання врожаю. Вона швидко і без втрат транспортує зерно, зберігаючи якість і обсяг кожної тонни.",
      cards: [
        {
          img: "/mist-mij-lankamy/1.webp",
          subTitle:
            "Транспортно-перевантажувальний комплекс ТПК-38 (бункер-накопичувач)",
          id: "tpk-38",
        },
      ],
    },
    products: [
      {
        id: "tpk-38",
        title:
          "Транспортно-перевантажувальний комплекс ТПК-38 (бункер-накопичувач)",
        modelCards: ["ТПК-38"],
        isCustomDesign: false,
        video: "/mist-mij-lankamy/1.mp4",
        videoPreview: "/mist-mij-lankamy/1.webp",
        description: {
          about:
            "Ефективне рішення для швидкого транспортування та перевантаження зерна і сипучих матеріалів.",
          purpose:
            "Комплекс значно скорочує час завантаження і розвантаження, підвищуючи продуктивність у полі та на складі.",
          features:
            "Конструкція включає бункер для накопичення зерна і транспортні механізми для швидкого перевантаження на автотранспорт або склад.",
          advantages: [
            "Великий бункер місткістю 38 м³ дозволяє зберігати значні обсяги і зменшує кількість зупинок.",
            "Акуратне і швидке перевантаження мінімізує втрати зерна.",
            "Мобільність комплексу дає змогу легко працювати в полі чи на фермі.",
            "Ця техніка входить до програми «Зроблено в Україні» з можливістю компенсації 25% вартості через Міністерство економіки.",
          ],
        },
        images: [
          "/mist-mij-lankamy/tpk/1.webp",
          "/mist-mij-lankamy/tpk/2.webp",
          "/mist-mij-lankamy/tpk/3.webp",
        ],
        specs: {
          models: ["ТПК-38"],
          rows: [
            {
              label: "Габаритні розміри, мм (довжина/ширина/висота), не більше",
              values: ["8800 / 4050 / 3750"],
            },
            {
              label: "Кількість осей, шт.",
              values: ["1"],
            },
            {
              label: "Маса, не більше, кг",
              values: ["7300"],
            },
            {
              label: "Максимально допустиме навантаження, не більше, кг",
              values: ["30000"],
            },
            {
              label: "Максимальна вага з вантажем, кг",
              values: ["37000"],
            },
            {
              label: "Кількість коліс, шт.",
              values: ["2"],
            },
            {
              label: "Розмір шин",
              values: ["900/70 R32"],
            },
          ],
        },
      },
    ],
    },
    en: {
      hero: {
        breadcrums: "hylen bridge",
        title: "HYLEN BRIDGE",
        subTitle: "Grain reloaders",
        text: "Equipment in the HYLEN BRIDGE category provides a reliable connection between crop handling and storage stages. It transfers grain quickly with minimal losses while preserving quality and volume.",
        cards: [
          {
            img: "/mist-mij-lankamy/1.webp",
            subTitle: "Transport and reloading complex TPK-38 (accumulation hopper)",
            id: "tpk-38",
          },
        ],
      },
      products: [
        {
          id: "tpk-38",
          title: "Transport and reloading complex TPK-38 (accumulation hopper)",
          modelCards: ["TPK-38"],
          isCustomDesign: false,
          video: "/mist-mij-lankamy/1.mp4",
          videoPreview: "/mist-mij-lankamy/1.webp",
          description: {
            about:
              "An effective solution for fast transportation and reloading of grain and bulk materials.",
            purpose:
              "The complex significantly reduces loading and unloading time, increasing efficiency in the field and at storage facilities.",
            features:
              "The design includes an accumulation hopper and transfer mechanisms for fast reloading onto trucks or to storage.",
            advantages: [
              "Large 38 m3 hopper reduces downtime",
              "Accurate and fast transfer minimizes grain loss",
              "High mobility for field and farm operation",
            ],
          },
          images: [
            "/mist-mij-lankamy/tpk/1.webp",
            "/mist-mij-lankamy/tpk/2.webp",
            "/mist-mij-lankamy/tpk/3.webp",
          ],
          specs: {
            models: ["ТПК-38"],
            rows: [
              { label: "Габаритні розміри, мм (довжина/ширина/висота), не більше", values: ["8800 / 4050 / 3750"] },
              { label: "Кількість осей, шт.", values: ["1"] },
              { label: "Маса, не більше, кг", values: ["7300"] },
              { label: "Максимально допустиме навантаження, не більше, кг", values: ["30000"] },
              { label: "Максимальна вага з вантажем, кг", values: ["37000"] },
              { label: "Кількість коліс, шт.", values: ["2"] },
              { label: "Розмір шин", values: ["900/70 R32"] },
            ],
          },
        },
      ],
    },
  };
  const pageData = t[language];

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <ProductHero heroData={pageData.hero} />
      {pageData.products.map((product, index) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: 120 }}>
          <ProductSections productData={product} showTopLine={index > 0} />
          <TechnicalSpecs specs={product.specs} />
        </div>
      ))}
      <ProductOtherTypesSlider excludeLink="/mist-mij-lankamy" />
      <Footer />
    </div>
  );
}
