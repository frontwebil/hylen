import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { ProductOtherTypesSlider } from "@/Components/Products/ProductOtherTypesSlider/ProductOtherTypesSlider";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";

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

export default function page() {
  const pageData: PageData = {
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
          "/rytm-zhyvlennya/ksp1/1.webp",
          "/rytm-zhyvlennya/ksp1/2.webp",
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
                "3950 / 2350 / 780 / 1550 / 2200",
                "4240 / 2800 / 780 / 1550 / 2200",
                "4400 / 2800 / 780 / 1550 / 2400",
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
          "/rytm-zhyvlennya/ksp2/1.webp",
          "/rytm-zhyvlennya/ksp2/2.webp",
          "/rytm-zhyvlennya/ksp2/3.webp",
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
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <ProductHero heroData={pageData.hero} />
      {pageData.products.map((product) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: 120 }}>
          <ProductSections productData={product} />
          <TechnicalSpecs specs={product.specs} />
        </div>
      ))}
      <ProductOtherTypesSlider excludeLink="/rytm-zhyvlennya" />
      <Footer />
    </div>
  );
}
