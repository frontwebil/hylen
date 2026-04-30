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

export default function page() {
  const pageData: PageData = {
    hero: {
      breadcrums: "основи врожаю",
      title: "ОСНОВИ ВРОЖАЮ",
      subTitle: "Грунтообробна техніка",
      text: "Грунтообробна техніка категорії «Основи врожаю» готує землю до нового циклу життя, забезпечуючи структуру, родючість та ідеальні умови для росту культур.",
      cards: [
        {
          img: "/osnovy-vrojayy/1.webp",
          subTitle: "Комплекс фрезерно-грядковий",
          id: "kfg",
        },
      ],
    },
    products: [
      {
        id: "kfg",
        title: "Комплекс фрезерно-грядковий",
        modelCards: ["КФГ"],
        isCustomDesign: false,
        video: "/osnovy-vrojayy/1.mp4",
        videoPreview: "/osnovy-vrojayy/1.webp",
        description: {
          about:
            "КФГ – спеціалізований агрегат для передпосівної підготовки ґрунту та формування гряди (гребенів) під овочеві культури. Поєднує фрези та грядоутворювачі для створення дрібнокомірчастої структури ґрунту та рівних гряд.",
          purpose:
            "Підготовка ґрунту та формування гряд за один прохід трактора. Ідеально для картоплі, овочів, ягід та інших культур, що потребують висадки на гряди.",
          features:
            "Фрези для розпушення ґрунту та подрібнення залишків рослин. Грядоутворювачі для рівних і однорідних гряд. Налаштування ширини міжрядь та висоти гряд.",
          advantages: [
            "Підвищення врожайності завдяки кращому доступу коренів до повітря та вологи",
            "Економія часу, палива та ресурсів завдяки одночасному виконанню кількох операцій",
            "Оптимальний дренаж і легше механізоване збирання врожаю",
            "Універсальність налаштувань під різні культури",
          ],
        },
        images: [
          "/osnovy-vrojayy/kfg/2.webp",
          "/osnovy-vrojayy/kfg/3.webp",
          "/osnovy-vrojayy/kfg/1.webp",
        ],
        specs: {
          models: ["KFG"],
          rows: [
            { label: "Модель", values: ["КФГ"] },
            { label: "Тип агрегату", values: ["навісний"] },
            {
              label: "Призначення",
              values: ["Формування гряд під посадку рослин"],
            },
            { label: "Висота, мм", values: ["1830"] },
            { label: "Ширина, мм", values: ["1980"] },
            { label: "Довжина, мм", values: ["4500"] },
            { label: "Маса, кг", values: ["1200"] },
            {
              label: "Рекомендована потужність трактора, к.с.",
              values: ["80"],
            },
            { label: "Робоча швидкість обертання ВВП, об/хв", values: ["540"] },
            { label: "Тип зчеплення", values: ["Трьохточкове"] },
            {
              label: "Гідравлічна система",
              values: ["Підйом опускання рами плівкоукладача"],
            },
            {
              label: "Рама",
              values: ["Жорстка, розбірна, виготовлена з високоміцної сталі S355"],
            },
            {
              label: "Дискові ножі",
              values: [
                "Передні диски діаметром 500мм для прорізання ґрунту або рослинних залишків з можливістю регулювання",
              ],
            },
            {
              label: "Привід",
              values: [
                "Привід від трактора через карданний вал та редукторний механізм з ланцюговою передачею на фрезу",
              ],
            },
            {
              label: "Опорні колеса",
              values: [
                "Два опорних колеса з шиною бренду BKT «MagLift 4.00-8» та піввісю компанії FAD та два прикатуючих плівку колеса з шиною Deli Tire S 15.00-6 R6",
              ],
            },
            {
              label: "Фреза",
              values: ["Змінна конструкція на 42 ножі шириною 1140 мм"],
            },
            {
              label: "Стрічка крапельного поливу",
              values: ["Можливість встановлення стрічки крапельного поливу з регулюваннями"],
            },
            {
              label: "Плівкоукладач",
              values: ["Механізм укладення плівки з прикатуючими колесами та нагортаючими лапами"],
            },
            {
              label: "Формувач грядки",
              values: ["Заслонка з регулюванням ширини грядки"],
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
      {pageData.products.map((product, index) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: 120 }}>
          <ProductSections productData={product} showTopLine={index > 0} />
          <TechnicalSpecs specs={product.specs} />
        </div>
      ))}
      <ProductOtherTypesSlider excludeLink="/osnovy-vrojayy" />
      <Footer />
    </div>
  );
}

