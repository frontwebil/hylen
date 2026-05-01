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
      breadcrums: "ритм живлення",
      title: "РИТМ ЖИВЛЕННЯ",
      subTitle: "Кормозмішувачі-змішувачі",
      text: 'Техніка категорії "Ритм живлення" забезпечує стабільну й ефективну «внутрішню циркуляцію» господарства. Ритм живлення відповідає за харчовий баланс — злагоджено, точно й без збоїв. Це той самий механізм, що підтримує ритм життя ферми.',
      cards: [
        {
          img: "/rytm-zhyvlennya/1.webp",
          subTitle: "Кормозмішувач КСП",
          id: "ksp-single-auger",
        },
        {
          img: "/rytm-zhyvlennya/2.webp",
          subTitle: "Кормозмішувач КСП з двома шнеками",
          id: "ksp-double-auger",
        },
      ],
    },
    products: [
      {
        id: "ksp-single-auger",
        title: "Кормозмішувач КСП",
        modelCards: ["КСП-6", "КСП-10", "КСП-12"],
        isCustomDesign: true,
        video: "/rytm-zhyvlennya/1.mp4",
        videoPreview: "/rytm-zhyvlennya/1.webp",
        description: {
          about:
            "Це техніка для приготування та точного змішування кормових сумішей із різних компонентів: зеленої маси, силосу, сінажу, соломи, комбікорму та добавок.",
          purpose:
            "Ідеальний вибір для молочних, великотоварних і свинарських ферм, а також вівчарства.",
          features:
            "Зважування здійснюється з точністю до 1%, що гарантує ідеальний раціон для ваших тварин.",
          advantages: [
            "Рівномірна роздача корму підвищує продуктивність ферми і зменшує втрати.",
            "Конструкція кормозмішувача - міцна рама і бункер від 6 до 12 м³, розраховані на суворі умови роботи.",
            "Використовуємо якісні європейські та українські деталі для надійності та конкурентної ціни.",
          ],
        },
        images: [
          "/rytm-zhyvlennya/ksp1/2.webp",
          "/rytm-zhyvlennya/ksp1/1.webp",
          "/rytm-zhyvlennya/ksp1/3.webp",
        ],
        specs: {
          models: ["КСП-6", "КСП-10", "КСП-12"],
          rows: [
            {
              label: "Об'єм бункера, м³",
              values: ["6", "10", "12"],
            },
            {
              label:
                "Габаритні розміри, мм (довжина/висота/висота вивантажувального отвору/колія/ширина)",
              values: [
                "3950\n2350\n780\n 1550\n2200",
                "4240\n2800\n780\n 1550\n2200",
                "4400\n2800\n780\n1550\n2400",
              ],
            },
            {
              label: "Маса завантажуваного корму, не більше, кг",
              values: ["2000", "3300", "4000"],
            },
            {
              label: "Кількість ножів, шт",
              values: ["5", "5", "5"],
            },
            {
              label: "Число обертів ВВП, об/хв",
              values: ["540", "540", "540"],
            },
            {
              label: "Частота обертання шнека, об/хв",
              values: ["25", "25", "25"],
            },
            {
              label: "Агрегатується з трактором тягового класу, кН",
              values: ["1,4", "1,4", "1,4"],
            },
            {
              label: "Обслуговуючий персонал, чол.",
              values: ["1", "1", "1"],
            },
          ],
        },
      },
      {
        id: "ksp-double-auger",
        title: "Кормозмішувач КСП з двома шнеками",
        modelCards: ["КСП-16", "КСП-18", "КСП-20", "КСП-24"],
        isCustomDesign: true,
        video: "/rytm-zhyvlennya/2.mp4",
        videoPreview: "/rytm-zhyvlennya/2.webp",
        description: {
          about:
            "Це надійна техніка для приготування і роздачі кормових сумішей з різних компонентів: зеленої маси, силосу, сінажу, сіна, соломи, комбікорму, брикетів та добавок.",
          purpose:
            "Ідеальний вибір для молочних, великотоварних, вівчарських та свинарських ферм.",
          features:
            "Завдяки точному зважуванню з похибкою до 1% та електронним системам, кормозмішувач ідеально подрібнює і змішує всі інгредієнти, забезпечуючи рівномірну роздачу корму тваринам.",
          advantages: [
            "Міцна конструкція з посиленою рамою і бункером об'ємом від 16 до 24 м³, оснащена двома шнеками, розрахована на важкі умови роботи на фермах.",
            "Використання якісних європейських та українських комплектуючих гарантує високу надійність і доступну ціну.",
          ],
        },
        images: [
          "/rytm-zhyvlennya/ksp2/2.webp",
          "/rytm-zhyvlennya/ksp2/3.webp",
          "/rytm-zhyvlennya/ksp2/1.webp",
        ],
        specs: {
          models: ["КСП-16", "КСП-18", "КСП-20", "КСП-24"],
          rows: [
            {
              label: "Об'єм бункера, м³",
              values: ["16", "18", "20", "24"],
            },
            {
              label: "Довжина, мм",
              values: ["6450", "6600", "6700", "6700"],
            },
            {
              label: "Висота, мм",
              values: ["2700", "2800", "2800", "3000"],
            },
            {
              label: "Висота вивантажувального отвору, мм",
              values: ["780", "780", "780", "780"],
            },
            {
              label: "Колія, мм",
              values: ["2000", "2000", "2000", "2000"],
            },
            {
              label: "Ширина, мм",
              values: ["2200", "2200", "2400", "2400"],
            },
            {
              label: "Маса завантажуваного корму, кг, не більше",
              values: ["5300", "6000", "6600", "8000"],
            },
            {
              label: "Кількість шнеків, шт",
              values: ["2", "2", "2", "2"],
            },
            {
              label: "Кількість ножів, шт",
              values: ["2x5", "2x5", "2x5", "2x5"],
            },
            {
              label: "Число обертів ВВП, об/хв",
              values: ["540", "540", "540", "540"],
            },
            {
              label: "Частота обертання шнека, об/хв",
              values: ["25", "25", "25", "25"],
            },
            {
              label: "Агрегатується з трактором тягового класу, кН",
              values: ["2", "2", "3", "3"],
            },
            {
              label: "Обслуговуючий персонал, чол.",
              values: ["1", "1", "1", "1"],
            },
          ],
        },
      },
    ],
    },
    en: {
      hero: {
        breadcrums: "hylen pulse",
        title: "HYLEN PULSE",
        subTitle: "Feed mixer wagons",
        text: "Equipment in the HYLEN PULSE category ensures stable and efficient internal circulation across your operation. Feeding rhythm supports nutritional balance accurately and consistently.",
        cards: [
          {
            img: "/rytm-zhyvlennya/1.webp",
            subTitle: "Feed mixer KSP",
            id: "ksp-single-auger",
          },
          {
            img: "/rytm-zhyvlennya/2.webp",
            subTitle: "Feed mixer KSP with two augers",
            id: "ksp-double-auger",
          },
        ],
      },
      products: [
        {
          id: "ksp-single-auger",
          title: "Feed mixer KSP",
          modelCards: ["KSP-6", "KSP-10", "KSP-12"],
          isCustomDesign: true,
          video: "/rytm-zhyvlennya/1.mp4",
          videoPreview: "/rytm-zhyvlennya/1.webp",
          description: {
            about:
              "Equipment for preparing and precise mixing of feed mixtures from green mass, silage, haylage, straw, compound feed, and additives.",
            purpose:
              "Ideal for dairy, large-scale livestock, pig, and sheep farms.",
            features:
              "Weighing accuracy up to 1% ensures the right nutritional balance for livestock.",
            advantages: [
              "Uniform feed distribution boosts productivity and reduces losses",
              "Sturdy frame and hopper from 6 to 12 m3 for demanding operation",
              "High-quality European and Ukrainian components for reliability and competitive cost",
            ],
          },
          images: [
            "/rytm-zhyvlennya/ksp1/2.webp",
            "/rytm-zhyvlennya/ksp1/1.webp",
            "/rytm-zhyvlennya/ksp1/3.webp",
          ],
          specs: {
            models: ["КСП-6", "КСП-10", "КСП-12"],
            rows: [
              { label: "Об'єм бункера, м³", values: ["6", "10", "12"] },
              {
                label:
                  "Габаритні розміри, мм (довжина/висота/висота вивантажувального отвору/колія/ширина)",
                values: ["3950\n2350\n780\n 1550\n2200", "4240\n2800\n780\n 1550\n2200", "4400\n2800\n780\n1550\n2400"],
              },
              { label: "Маса завантажуваного корму, не більше, кг", values: ["2000", "3300", "4000"] },
              { label: "Кількість ножів, шт", values: ["5", "5", "5"] },
              { label: "Число обертів ВВП, об/хв", values: ["540", "540", "540"] },
              { label: "Частота обертання шнека, об/хв", values: ["25", "25", "25"] },
              { label: "Агрегатується з трактором тягового класу, кН", values: ["1,4", "1,4", "1,4"] },
              { label: "Обслуговуючий персонал, чол.", values: ["1", "1", "1"] },
            ],
          },
        },
        {
          id: "ksp-double-auger",
          title: "Feed mixer KSP with two augers",
          modelCards: ["KSP-16", "KSP-18", "KSP-20", "KSP-24"],
          isCustomDesign: true,
          video: "/rytm-zhyvlennya/2.mp4",
          videoPreview: "/rytm-zhyvlennya/2.webp",
          description: {
            about:
              "Reliable equipment for preparing and distributing feed mixtures from green mass, silage, haylage, hay, straw, compound feed, briquettes, and additives.",
            purpose:
              "Ideal for dairy, large-scale, sheep, and pig farms.",
            features:
              "Precise weighing (up to 1% error) and electronic systems ensure effective grinding, mixing, and uniform feed distribution.",
            advantages: [
              "Reinforced frame with 16-24 m3 hopper and dual augers for heavy-duty work",
              "Quality European and Ukrainian components ensure reliability and affordable cost",
            ],
          },
          images: [
            "/rytm-zhyvlennya/ksp2/2.webp",
            "/rytm-zhyvlennya/ksp2/3.webp",
            "/rytm-zhyvlennya/ksp2/1.webp",
          ],
          specs: {
            models: ["КСП-16", "КСП-18", "КСП-20", "КСП-24"],
            rows: [
              { label: "Об'єм бункера, м³", values: ["16", "18", "20", "24"] },
              { label: "Довжина, мм", values: ["6450", "6600", "6700", "6700"] },
              { label: "Висота, мм", values: ["2700", "2800", "2800", "3000"] },
              { label: "Висота вивантажувального отвору, мм", values: ["780", "780", "780", "780"] },
              { label: "Колія, мм", values: ["2000", "2000", "2000", "2000"] },
              { label: "Ширина, мм", values: ["2200", "2200", "2400", "2400"] },
              { label: "Маса завантажуваного корму, кг, не більше", values: ["5300", "6000", "6600", "8000"] },
              { label: "Кількість шнеків, шт", values: ["2", "2", "2", "2"] },
              { label: "Кількість ножів, шт", values: ["2x5", "2x5", "2x5", "2x5"] },
              { label: "Число обертів ВВП, об/хв", values: ["540", "540", "540", "540"] },
              { label: "Частота обертання шнека, об/хв", values: ["25", "25", "25", "25"] },
              { label: "Агрегатується з трактором тягового класу, кН", values: ["2", "2", "3", "3"] },
              { label: "Обслуговуючий персонал, чол.", values: ["1", "1", "1", "1"] },
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
      <ProductOtherTypesSlider excludeLink="/rytm-zhyvlennya" />
      <Footer />
    </div>
  );
}
