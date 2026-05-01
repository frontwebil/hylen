"use client";

import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { ProductOtherTypesSlider } from "@/Components/Products/ProductOtherTypesSlider/ProductOtherTypesSlider";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";
import { ProductPageData } from "@/Types/productData";

const pageData: ProductPageData = {
  hero: {
    breadcrums: { uk: "міст між ланками", en: "hylen bridge" },
    title: { uk: "МІСТ МІЖ ЛАНКАМИ", en: "HYLEN BRIDGE" },
    subTitle: { uk: "Перевантажувачі зерна", en: "Grain reloaders" },
    text: {
      uk: "Техніка категорії «Міст між ланками» - це надійний зв'язок між етапами обробки та зберігання врожаю. Вона швидко і без втрат транспортує зерно, зберігаючи якість і обсяг кожної тонни.",
      en: "Equipment in the HYLEN BRIDGE category provides a reliable connection between crop handling and storage stages. It transfers grain quickly with minimal losses while preserving quality and volume.",
    },
    cards: [
      {
        img: "/mist-mij-lankamy/1.webp",
        subTitle: {
          uk: "Транспортно-перевантажувальний комплекс ТПК-38 (бункер-накопичувач)",
          en: "Transport and reloading complex TPK-38 (accumulation hopper)",
        },
        id: "tpk-38",
      },
    ],
  },
  products: [
    {
      id: "tpk-38",
      title: {
        uk: "Транспортно-перевантажувальний комплекс ТПК-38 (бункер-накопичувач)",
        en: "Transport and reloading complex TPK-38 (accumulation hopper)",
      },
      modelCards: {
        uk: ["ТПК-38"],
        en: ["TPK-38"],
      },
      isCustomDesign: false,
      video: "/mist-mij-lankamy/1.mp4",
      videoPreview: "/mist-mij-lankamy/1.webp",
      description: {
        about: {
          uk: "Ефективне рішення для швидкого транспортування та перевантаження зерна і сипучих матеріалів.",
          en: "An effective solution for fast transportation and reloading of grain and bulk materials.",
        },
        purpose: {
          uk: "Комплекс значно скорочує час завантаження і розвантаження, підвищуючи продуктивність у полі та на складі.",
          en: "The complex significantly reduces loading and unloading time, increasing efficiency in the field and at storage facilities.",
        },
        features: {
          uk: "Конструкція включає бункер для накопичення зерна і транспортні механізми для швидкого перевантаження на автотранспорт або склад.",
          en: "The design includes an accumulation hopper and transfer mechanisms for fast reloading onto trucks or to storage.",
        },
        advantages: {
          uk: [
            "Великий бункер місткістю 38 м³ дозволяє зберігати значні обсяги і зменшує кількість зупинок.",
            "Акуратне і швидке перевантаження мінімізує втрати зерна.",
            "Мобільність комплексу дає змогу легко працювати в полі чи на фермі.",
            "Ця техніка входить до програми «Зроблено в Україні» з можливістю компенсації 25% вартості через Міністерство економіки.",
          ],
          en: [
            "Large 38 m3 hopper reduces downtime",
            "Accurate and fast transfer minimizes grain loss",
            "High mobility for field and farm operation",
          ],
        },
      },
      images: [
        "/mist-mij-lankamy/tpk/2.webp",
        "/mist-mij-lankamy/tpk/1.webp",
        "/mist-mij-lankamy/tpk/3.webp",
      ],
      specs: {
        models: {
          uk: ["ТПК-38"],
          en: ["TPK-38"],
        },
        rows: [
          {
            label: {
              uk: "Габаритні розміри, мм (довжина/ширина/висота), не більше",
              en: "Overall dimensions, mm (length/width/height), max",
            },
            values: ["8800 / 4050 / 3750"],
          },
          {
            label: {
              uk: "Кількість осей, шт.",
              en: "Number of axles, pcs",
            },
            values: ["1"],
          },
          {
            label: {
              uk: "Маса, не більше, кг",
              en: "Mass, max, kg",
            },
            values: ["7300"],
          },
          {
            label: {
              uk: "Максимально допустиме навантаження, не більше, кг",
              en: "Maximum permissible load, max, kg",
            },
            values: ["30000"],
          },
          {
            label: {
              uk: "Максимальна вага з вантажем, кг",
              en: "Maximum gross weight, kg",
            },
            values: ["37000"],
          },
          {
            label: {
              uk: "Кількість коліс, шт.",
              en: "Number of wheels, pcs",
            },
            values: ["2"],
          },
          {
            label: { uk: "Розмір шин", en: "Tire size" },
            values: ["900/70 R32"],
          },
        ],
      },
    },
  ],
};

export default function Page() {
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
