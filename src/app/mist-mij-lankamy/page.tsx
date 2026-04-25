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
      <ProductOtherTypesSlider excludeLink="/mist-mij-lankamy" />
      <Footer />
    </div>
  );
}
