import { Header } from "@/Components/Layout/Header/Header";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";
import { ProductOtherTypesSlider } from "@/Components/Products/ProductOtherTypesSlider/ProductOtherTypesSlider";
import { Footer } from "@/Components/Layout/Footer/Footer";

export type ProductCardItem = {
  img: string;
  subTitle: string;
  id: string;
};

export type ProductDescription = {
  about: string;
  purpose: string;
  features: string;
  advantages: string[];
};

export type ProductSpecRow = {
  label: string;
  values: string[];
};

export type ProductSpecs = {
  models: string[];
  rows: ProductSpecRow[];
};

export type ProductItem = {
  id: string;
  title: string;
  /** Підписи на картках під заголовком (окремо від колонок у таблиці характеристик) */
  modelCards: string[];
  isCustomDesign: boolean;
  description: ProductDescription;
  images: string[];
  specs: ProductSpecs;
};

export type PageData = {
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
      breadcrums: "хребет системи",
      title: "ХРЕБЕТ СИСТЕМИ",
      subTitle: "Одноосні причепи",
      text: "Техніка категорії «Хребет системи» - це основа, на якій тримається щоденна робота господарства.Одноосні причепи HYLEN створені витримувати основне навантаження й працювати стабільно у складних умовах. Маневрені, компактні та прості в експлуатації - вони легко інтегруються у будь-який робочий процес.",
      cards: [
        {
          img: "/hrebet-y-poli/1.webp",
          subTitle: "Напівпричіп тракторний одновісний самоскидний НПС",
          id: "id1",
        },
        {
          img: "/hrebet-y-poli/2.webp",
          subTitle: "Напівпричіп тракторний самоскидний",
          id: "id2",
        },
      ],
    },
    products: [
      {
        id: "id1",
        title: "Напівпричіп тракторний одновісний самоскидний НПС",
        modelCards: ["НПС-1", "НПС-2", "НПС-3"],
        isCustomDesign: false,

        description: {
          about:
            "Тракторний самоскидний напівпричіп НПС — це універсальний транспортний засіб, спроєктований для ефективного використання в сільському господарстві, будівництві та комунальних роботах.",

          purpose:
            "Надійне рішення для швидкого й ефективного транспортування сипучих матеріалів: добрив, зерна, піску та будматеріалів.",

          features:
            "Завдяки функції самоскиду, розвантаження відбувається швидко та без зайвих зусиль. Моделі від 1 до 6 тонн дозволяють обрати оптимальний варіант під ваші потреби.",

          advantages: [
            "Висока вантажопідйомність і міцність",
            "Легке і швидке самостійне вивантаження",
            "Компактна конструкція, сумісна з тракторами різних класів",
            "Довговічність та стійкість до зношування",
          ],
        },

        images: [
          "/hrebet-y-poli/nps/1.webp",
          "/hrebet-y-poli/nps/2.webp",
          "/hrebet-y-poli/nps/3.webp",
        ],

        specs: {
          models: ["НПС-1", "НПС-2", "НПС-3", "НПС-5"],

          rows: [
            {
              label: "Довжина, мм",
              values: ["2850", "3140", "3300", "3700"],
            },
            {
              label: "Ширина, мм",
              values: ["1270", "1750", "1700", "1700"],
            },
            {
              label: "Висота, мм",
              values: ["1030", "1270", "1400", "1400"],
            },
            {
              label: "Габарити кузова, мм",
              values: [
                "1150x1950x300",
                "1630x2150x400",
                "1600x3000x450",
                "1600x3000x450",
              ],
            },
            {
              label: "Ширина колії, мм",
              values: ["1100", "1180", "1350", "1350"],
            },
            {
              label: "Максимально допустима вага вантажу, кг",
              values: ["1200", "2300", "3500", "5100"],
            },
            {
              label: "Вага, кг",
              values: ["100", "300", "500", "600"],
            },
          ],
        },
      },
      {
        id: "id2",
        title: "Напівпричіп тракторний самоскидний",
        modelCards: ["П-6", "П-10", "П-13"],
        isCustomDesign: false,

        description: {
          about:
            "Тракторний самоскидний напівпричіп П-6 / П-10 / П-13 – універсальний транспорт для сипучих вантажів: зерна, піску, щебеню, добрив і будматеріалів.",

          purpose:
            "Ідеальний для аграрного сектору, будівництва та транспортування різноманітних вантажів – від врожаю до будматеріалів.",

          features:
            "Конструкція з гідравлічним підйомом кузова дозволяє швидко і легко розвантажувати великі обсяги.",

          advantages: [
            "Швидке розвантаження з самоскидним механізмом",
            "Висока вантажопідйомність від 6 до 13 тонн",
            "Міцна конструкція для роботи в складних умовах",
            "Надійне шасі і колеса для пересування по будь-якій місцевості",
            "Ця техніка входить у програму «Зроблено в Україні» з можливістю компенсації 25% вартості через Міністерство економіки.",
          ],
        },

        images: [
          "/hrebet-y-poli/p/1.webp",
          "/hrebet-y-poli/p/2.webp",
          "/hrebet-y-poli/p/3.webp",
        ],

        specs: {
          models: ["П-6", "П-10", "П-13"],

          rows: [
            {
              label: "Довжина, мм",
              values: ["5185", "6130", "7495"],
            },
            {
              label: "Ширина, мм",
              values: ["2500", "2600", "2600"],
            },
            {
              label: "Висота, мм",
              values: ["2000", "2100", "2200"],
            },
            {
              label: "Ширина колії, мм",
              values: ["2075", "2095", "2056"],
            },
            {
              label: "Маса, кг",
              values: ["1800", "2300", "3600"],
            },
            {
              label: "Максимальне навантаження, кг",
              values: ["6000", "10000", "13000"],
            },
            {
              label: "Максимально допустима вага з вантажем, кг",
              values: ["7500", "12100", "16600"],
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
      <ProductOtherTypesSlider excludeLink="/hrebet-y-poli" />
      <Footer />
    </div>
  );
}
