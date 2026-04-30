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
      breadcrums: "тяговий вузол",
      title: "ТЯГОВИЙ ВУЗОЛ",
      subTitle: "Причіпи-Напівпричіпи",
      text: "Техніка категорії «Тяговий вузол» - опора стабільної та безперебійної роботи. Міцний, витривалий причіп-напівпричіп, який тримає будь-яке навантаження й працює без збоїв у найскладніших умовах.",
      cards: [
        {
          img: "/tyahovyy-vuzol/1.webp",
          subTitle: "Напівпричіп платформа НПВ 3007.5",
          id: "npv-3007-5",
        },
        {
          img: "/tyahovyy-vuzol/2.webp",
          subTitle: "Напівпричіп транспортування контейнерів НПТК",
          id: "nptk",
        },
        {
          img: "/tyahovyy-vuzol/3.webp",
          subTitle: "Причіп транспортування контейнерів ПТК-10",
          id: "ptk-10",
        },
        {
          img: "/tyahovyy-vuzol/4.webp",
          subTitle: "Причіп спеціальний ПС-3,5",
          id: "ps-3-5",
        },
      ],
    },
    products: [
      {
        id: "npv-3007-5",
        title: "Напівпричіп платформа НПВ 3007.5",
        modelCards: ["НПВ 3007.5"],
        isCustomDesign: false,
        video: "/tyahovyy-vuzol/1.mp4",
        videoPreview: "/tyahovyy-vuzol/1.webp",
        description: {
          about:
            "Універсальне і надійне рішення для перевезення важких та негабаритних вантажів.",
          purpose:
            "Ідеально підходить для транспортування будівельної, сільськогосподарської та автомобільної техніки, а також великих конструкцій і масивних об'єктів.",
          features:
            "Міцна конструкція НПВ 3007.5 робить його незамінним для складних логістичних завдань. Це надійний партнер для підприємств, що працюють з великими вантажами.",
          advantages: [
            "Універсальність: підходить для різних типів вантажів, включно з негабаритними.",
            "Міцність і довговічність: виготовлений з якісних матеріалів, витримує навантаження до 30 тонн.",
            "Зручність експлуатації: полегшує завантаження та розвантаження, економить час і сили.",
            "Продукція входить до програми «Зроблено в Україні» з можливістю отримати компенсацію 25% вартості через Міністерство економіки.",
          ],
        },
        images: [
          "/tyahovyy-vuzol/np30/1.webp",
          "/tyahovyy-vuzol/np30/2.webp",
          "/tyahovyy-vuzol/np30/3.webp",
        ],
        specs: {
          models: ["НПВ 3007.5"],
          rows: [
            {
              label:
                "Габаритні розміри, мм (довжина/ширина (без габаритних сигналів)/висота/кліренс, не менше)",
              values: ["12 610 ± 25\n2 550 ± 10\n3 250 ± 80\n130"],
            },
            {
              label: "Кількість осей, шт.",
              values: ["3"],
            },
            {
              label: "Кузов",
              values: ["Платформа"],
            },
            {
              label: "Споряджена маса, не більше, кг",
              values: ["9 000"],
            },
            {
              label: "Повна маса, не більше, кг",
              values: ["39 000"],
            },
            {
              label: "Кількість коліс, шт.",
              values: ["12 + 1 запасне"],
            },
            {
              label: "Максимальне навантаження на вісь, кг",
              values: ["До 9 000"],
            },
            {
              label: "Розмір дисків коліс",
              values: ["17,5x6,75"],
            },
            {
              label: "Розмір шин",
              values: ["235/75 R17,5"],
            },
            {
              label: "Гальмівна система",
              values: ["Пневматична, з EBS"],
            },
            {
              label: "Максимальна швидкість руху, км/год",
              values: ["105"],
            },
            {
              label: "Підвіска",
              values: ["Пневматична"],
            },
            {
              label: "Електромережа",
              values: ["24V"],
            },
          ],
        },
      },
      {
        id: "nptk",
        title: "Напівпричіп транспортування контейнерів НПТК",
        modelCards: ["НПТК"],
        isCustomDesign: false,
        video: "/tyahovyy-vuzol/2.mp4",
        videoPreview: "/tyahovyy-vuzol/2.webp",
        description: {
          about:
            "НПТК - надійне рішення для безпечного та швидкого перевезення вантажних контейнерів різних типів і розмірів.",
          purpose:
            "Оптимальний вибір для логістичних компаній, будівництва та промислових підприємств, що потребують ефективного транспортування контейнерів. Ідеальний для міжміських і міжнародних перевезень.",
          features:
            "Легка, але міцна конструкція збільшує вантажопідйомність і знижує вагу транспортного засобу. Є системи гальмування та освітлення для безпеки перевезень.",
          advantages: [
            "Висока вантажопідйомність: підходить для контейнерів 20, 40, 45 футів, а також негабаритних вантажів.",
            "Надійна фіксація: спеціальні механізми надійно закріплюють контейнер, мінімізуючи ризик зсуву під час руху.",
            "Міцність і довговічність: виготовлений з якісних матеріалів, витримує інтенсивні навантаження.",
            "Продукція входить до програми «Зроблено в Україні» з можливістю отримати компенсацію 25% вартості через Міністерство економіки.",
          ],
        },
        images: [
          "/tyahovyy-vuzol/nptk/1.webp",
          "/tyahovyy-vuzol/nptk/2.webp",
          "/tyahovyy-vuzol/nptk/3.webp",
        ],
        specs: {
          models: ["НПТК"],
          rows: [
            {
              label:
                "Габаритні розміри, мм (довжина/ширина (без габаритних сигналів)/висота/кліренс, не менше)",
              values: ["12 280 ± 25\n2450 ± 10\n1450 ± 80\n250"],
            },
            {
              label: "Кількість осей, шт.",
              values: ["3"],
            },
            {
              label: "Кузов",
              values: ["Контейнеровоз (для 40-футового або двох 20-футових контейнерів)"],
            },
            {
              label: "Споряджена маса, не більше, кг",
              values: ["5500"],
            },
            {
              label: "Повна маса, не більше, кг",
              values: ["35 000"],
            },
            {
              label: "Максимальне навантаження на вісь, кг",
              values: ["До 9000"],
            },
            {
              label: "Кількість коліс, шт.",
              values: ["6 + 1"],
            },
            {
              label: "Розмір дисків коліс",
              values: ["11,75 x 22,5"],
            },
            {
              label: "Розмір шин",
              values: ["385/65 R22,5"],
            },
            {
              label: "Максимальна швидкість руху, км/год",
              values: ["105"],
            },
            {
              label: "Гальмівна система",
              values: ["Пневматична, з EBS"],
            },
            {
              label: "Підвіска",
              values: ["Пневматична"],
            },
            {
              label: "Зчіпний шкворень",
              values: ["2\" шкворень"],
            },
            {
              label: "Електромережа",
              values: ["24V"],
            },
          ],
        },
      },
      {
        id: "ptk-10",
        title: "Причіп транспортування контейнерів ПТК-10",
        modelCards: ["ПТК-10"],
        isCustomDesign: false,
        video: "/tyahovyy-vuzol/3.mp4",
        videoPreview: "/tyahovyy-vuzol/3.webp",
        description: {
          about:
            "Надійний тягово-зчіпний причіп 2+0 (2+2) типу вантажних контейнерів для сільського господарства, будівельних робіт та інших видів техніки.",
          purpose:
            "Причіп виготовлено для транспортування вантажів різного об'єму, негабаритних одиниць та будівельної техніки.",
          features:
            "Платформа ПТК-10 обладнана системою фіксації, що унеможливлює зсув контейнера під час руху. Має високу вантажопідйомність і ергономічну конструкцію.",
          advantages: [
            "Сумісність із контейнерами типу євростандарт.",
            "Міцна конструкція.",
            "Надійна система кріплення контейнера та подовжений дишель.",
            "Легка експлуатація причепа.",
            "Висока прохідність причепа (кліренс не менше 300 мм).",
            "Електрообладнання 24/80V.",
          ],
        },
        images: [
          "/tyahovyy-vuzol/ptk10/1.webp",
          "/tyahovyy-vuzol/ptk10/2.webp",
          "/tyahovyy-vuzol/ptk10/3.webp",
        ],
        specs: {
          models: ["ПТК-10"],
          rows: [
            {
              label:
                "Габаритні розміри, мм (довжина, не більше / ширина / висота (у спорядженому стані))",
              values: ["17765\n2455\n1340"],
            },
            {
              label: "Кузов",
              values: ["Контейнеровоз (для 20-футового контейнера)"],
            },
            {
              label: "Максимальна довжина дишла причепа, мм",
              values: ["1990"],
            },
            {
              label: "Споряджена маса, не більше, кг",
              values: ["3200"],
            },
            {
              label: "Повна маса, не більше, кг",
              values: ["18000"],
            },
            {
              label: "Розмір коліс",
              values: ["385/65 R22.5"],
            },
            {
              label: "Максимальна швидкість руху, км/год",
              values: ["80"],
            },
            {
              label: "Гальмівна система",
              values: ["Пневматична (EBS - опційно)"],
            },
            {
              label: "Підвіска",
              values: ["Ресорна"],
            },
            {
              label: "Причіпна петля",
              values: ["90/D40"],
            },
            {
              label: "Електромережа",
              values: ["24V"],
            },
          ],
        },
      },
      {
        id: "ps-3-5",
        title: "Причіп спеціальний ПС-3,5",
        modelCards: ["Причіп спеціальний ПС-3,5"],
        isCustomDesign: false,
        video: "/tyahovyy-vuzol/4.mp4",
        videoPreview: "/tyahovyy-vuzol/4.webp",
        description: {
          about:
            "Причіп спеціальний ПС-3,5 - це спеціалізований транспортний засіб, призначений для перевезення бензинової або дизельної техніки й обладнання.",
          purpose:
            "Служить для транспортування евакуатора різного знаряддя і іншої спеціальної техніки в умовах, наближених до цивільних або промислових потреб.",
          features:
            "Повна маса вантажопідйомності 3500 кг. Максимальне навантаження 2800 кг.",
          advantages: [
            "Мала маса і висока вантажопідйомність ПС.",
            "Осі спеціально Swiss Axle 80.",
            "Ресорна підвіска.",
            "Сертифікат форми виробництва UA.MD.076.",
          ],
        },
        images: [
          "/tyahovyy-vuzol/ps3/1.webp",
          "/tyahovyy-vuzol/ps3/2.webp",
          "/tyahovyy-vuzol/ps3/3.webp",
        ],
        specs: {
          models: ["Причіп спеціальний ПС-3,5"],
          rows: [
            {
              label: "Довжина, мм",
              values: ["5950"],
            },
            {
              label: "Ширина, мм",
              values: ["2130"],
            },
            {
              label: "Висота (у спорядженому стані), мм",
              values: ["1180"],
            },
            {
              label: "Ширина колії, мм",
              values: ["1180"],
            },
            {
              label: "Максимальна маса, кг",
              values: ["6800"],
            },
            {
              label: "Максимальне навантаження, кг",
              values: ["2800"],
            },
            {
              label: "Максимальна вага з вантажем, не більше, кг",
              values: ["3500"],
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
      <ProductOtherTypesSlider excludeLink="/tyahovyy-vuzol" />
      <Footer />
    </div>
  );
}
