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
    breadcrums: { uk: "основи врожаю", en: "hylen terra" },
    title: { uk: "ОСНОВИ ВРОЖАЮ", en: "HYLEN TERRA" },
    subTitle: {
      uk: "Грунтообробна техніка",
      en: "Soil Cultivation Equipment",
    },
    text: {
      uk: "Грунтообробна техніка категорії «Основи врожаю» готує землю до нового циклу життя, забезпечуючи структуру, родючість та ідеальні умови для росту культур.",
      en: "Soil cultivation equipment in the HYLEN TERRA category prepares the land for a new life cycle, ensuring proper structure, fertility, and ideal conditions for crop growth.",
    },
    cards: [
      {
        img: "/osnovy-vrojayy/1.webp",
        subTitle: {
          uk: "Комплекс фрезерно-грядковий",
          en: "Milling and Ridge-Forming Complex",
        },
        id: "kfg",
      },
    ],
  },
  products: [
    {
      id: "kfg",
      title: {
        uk: "Комплекс фрезерно-грядковий",
        en: "Milling and Ridge-Forming Complex",
      },
      modelCards: {
        uk: ["КФГ"],
        en: ["KFG"],
      },
      isCustomDesign: false,
      video: "/osnovy-vrojayy/1.mp4",
      videoPreview: "/osnovy-vrojayy/1.webp",
      description: {
        about: {
          uk: "КФГ – спеціалізований агрегат для передпосівної підготовки ґрунту та формування гряди (гребенів) під овочеві культури. Поєднує фрези та грядоутворювачі для створення дрібнокомірчастої структури ґрунту та рівних гряд.",
          en: "The KFG complex is a specialized unit for pre-sowing soil preparation and ridge formation for vegetable crops. It combines milling cutters and ridge formers to create a fine soil structure and even ridges.",
        },
        purpose: {
          uk: "Підготовка ґрунту та формування гряд за один прохід трактора. Ідеально для картоплі, овочів, ягід та інших культур, що потребують висадки на гряди.",
          en: "Performs soil preparation and ridge formation in one tractor pass. Ideal for potatoes, vegetables, berries, and other ridge-planted crops.",
        },
        features: {
          uk: "Фрези для розпушення ґрунту та подрібнення залишків рослин. Грядоутворювачі для рівних і однорідних гряд. Налаштування ширини міжрядь та висоти гряд.",
          en: "Milling cutters loosen soil and crush plant residues. Ridge formers shape even ridges. Adjustable row spacing and ridge height.",
        },
        advantages: {
          uk: [
            "Підвищення врожайності завдяки кращому доступу коренів до повітря та вологи",
            "Економія часу, палива та ресурсів завдяки одночасному виконанню кількох операцій",
            "Оптимальний дренаж і легше механізоване збирання врожаю",
            "Універсальність налаштувань під різні культури",
          ],
          en: [
            "Higher yields by improving root access to air and moisture",
            "Saves time, fuel, and resources by combining multiple operations",
            "Improves drainage and simplifies mechanized harvesting",
            "Adjustable for different crops",
          ],
        },
      },
      images: [
        "/osnovy-vrojayy/kfg/1.webp",
        "/osnovy-vrojayy/kfg/3.webp",
        "/osnovy-vrojayy/kfg/2.webp",
      ],
      specs: {
        models: {
          uk: ["КФГ"],
          en: ["KFG"],
        },
        rows: [
          {
            label: { uk: "Модель", en: "Model" },
            values: [{ uk: "КФГ", en: "KFG" }],
          },
          {
            label: { uk: "Тип агрегату", en: "Implement type" },
            values: [{ uk: "навісний", en: "Mounted" }],
          },
          {
            label: { uk: "Призначення", en: "Application" },
            values: [
              {
                uk: "Формування гряд під посадку рослин",
                en: "Ridge formation for crop planting",
              },
            ],
          },
          {
            label: { uk: "Висота, мм", en: "Height, mm" },
            values: ["1830"],
          },
          {
            label: { uk: "Ширина, мм", en: "Width, mm" },
            values: ["1980"],
          },
          {
            label: { uk: "Довжина, мм", en: "Length, mm" },
            values: ["4500"],
          },
          {
            label: { uk: "Маса, кг", en: "Weight, kg" },
            values: ["1200"],
          },
          {
            label: {
              uk: "Рекомендована потужність трактора, к.с.",
              en: "Recommended tractor power, hp",
            },
            values: ["80"],
          },
          {
            label: {
              uk: "Робоча швидкість обертання ВВП, об/хв",
              en: "PTO operating speed, rpm",
            },
            values: ["540"],
          },
          {
            label: { uk: "Тип зчеплення", en: "Hitch type" },
            values: [{ uk: "Трьохточкове", en: "Three-point" }],
          },
          {
            label: { uk: "Гідравлічна система", en: "Hydraulic system" },
            values: [
              {
                uk: "Підйом опускання рами плівкоукладача",
                en: "Film-laying frame lift/lower",
              },
            ],
          },
          {
            label: { uk: "Рама", en: "Frame" },
            values: [
              {
                uk: "Жорстка, розбірна, виготовлена з високоміцної сталі S355",
                en: "Rigid, modular, made of high-strength S355 steel",
              },
            ],
          },
          {
            label: { uk: "Дискові ножі", en: "Disc knives" },
            values: [
              {
                uk: "Передні диски діаметром 500мм для прорізання ґрунту або рослинних залишків з можливістю регулювання",
                en: "Front discs, 500 mm diameter, for cutting soil and crop residues, adjustable",
              },
            ],
          },
          {
            label: { uk: "Привід", en: "Drive" },
            values: [
              {
                uk: "Привід від трактора через карданний вал та редукторний механізм з ланцюговою передачею на фрезу",
                en: "Tractor PTO drive through driveshaft and gearbox with chain transmission to milling rotor",
              },
            ],
          },
          {
            label: { uk: "Опорні колеса", en: "Support wheels" },
            values: [
              {
                uk: "Два опорних колеса з шиною бренду BKT «MagLift 4.00-8» та піввісю компанії FAD та два прикатуючих плівку колеса з шиною Deli Tire S 15.00-6 R6",
                en: "Two support wheels with BKT MagLift 4.00-8 tires and FAD half-axle, plus two film-pressing wheels with Deli Tire S 15.00-6 R6 tires",
              },
            ],
          },
          {
            label: { uk: "Фреза", en: "Milling rotor" },
            values: [
              {
                uk: "Змінна конструкція на 42 ножі шириною 1140 мм",
                en: "Modular design with 42 blades, working width 1140 mm",
              },
            ],
          },
          {
            label: { uk: "Стрічка крапельного поливу", en: "Drip tape" },
            values: [
              {
                uk: "Можливість встановлення стрічки крапельного поливу з регулюваннями",
                en: "Drip irrigation tape installation option with adjustments",
              },
            ],
          },
          {
            label: { uk: "Плівкоукладач", en: "Film layer" },
            values: [
              {
                uk: "Механізм укладення плівки з прикатуючими колесами та нагортаючими лапами",
                en: "Film laying mechanism with pressing wheels and covering shares",
              },
            ],
          },
          {
            label: { uk: "Формувач грядки", en: "Ridge former" },
            values: [
              {
                uk: "Заслонка з регулюванням ширини грядки",
                en: "Adjustable shield for ridge width control",
              },
            ],
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
      <ProductOtherTypesSlider excludeLink="/osnovy-vrojayy" />
      <Footer />
    </div>
  );
}
