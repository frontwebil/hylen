import { Header } from "@/Components/Layout/Header/Header";
import { ProductHero } from "@/Components/Products/ProductHero/ProductHero";
import { ProductSections } from "@/Components/Products/ProductSections/ProductSections";
import { TechnicalSpecs } from "@/Components/Products/TechnicalSpecs/TechnicalSpecs";

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
  title: string;
  subTitle: string;
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
      breadcrums: "хребет у полі",
      title: "Хребет у полі",
      subTitle: "Одноосні причепи",
      text: "Це база, на якій тримається система. Одноосні причепи HYLEN створені витримувати основне навантаження й працювати стабільно у складних умовах. Маневрені, компактні, прості в експлуатації – вони стають надійною ланкою у вашому господарстві.",
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
        title: "Напівпричіп тракторний одновісний самоскидний НПС",
        subTitle: "Півпричіп-самоскид НПС-1, НПС-2, НПС-3",

        description: {
          about:
            "Тракторний самоскидний напівпричіп НПС — це універсальний транспортний засіб, спроєктований для ефективного використання в сільському господарстві, будівництві та комунальних роботах.",

          purpose:
            "Ідеальний для аграрного сектору, будівництва та транспортування різноманітних вантажів — від врожаю до будматеріалів.",

          features:
            "Конструкція з гідравлічним підйомом кузова дозволяє швидко і легко розвантажувати великі обсяги.",

          advantages: [
            "Швидке розвантаження з самоскидним механізмом",
            "Висока вантажопідйомність від 6,0 до 13 тонн",
            "Міцна конструкція для роботи в складних умовах",
            "Надійне шасі і колеса для пересування по будь-якій місцевості",
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
    ],
  };

  return (
    <>
      <Header />
      <ProductHero heroData={pageData.hero} />
      {pageData.products.map((product, i) => (
        <div key={i}>
          <ProductSections productData={product} />
          <TechnicalSpecs specs={product.specs}/>
        </div>
      ))}
    </>
  );
}
