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
  const pageData: PageData = {
    hero: {
      breadcrums: "живильний потік",
      title: "ЖИВИЛЬНИЙ ПОТІК",
      subTitle: "Цистерни для води та пального",
      text: "Техніка категорії «Живильний потік» - забезпечує безперервний потік ресурсів у вашому господарстві. Від водопостачання до заправки техніки - вони підтримують ритм роботи, зберігаючи стабільність і продуктивність у будь-яких умовах.",
      cards: [
        {
          img: "/zhyvylnyy-potik/1.webp",
          subTitle: "Причіп-цистерна ПЦ",
          id: "prychip-tsysterna-pts",
        },
        {
          img: "/zhyvylnyy-potik/2.webp",
          subTitle: "Причіп цистерна ЦВ-2,0",
          id: "prychip-tsysterna-tsv-2-0",
        },
        {
          img: "/zhyvylnyy-potik/3.webp",
          subTitle: "Автомобільний паливозаправник АПЗ",
          id: "avtomobilnyy-palyvozapravnyk-apz",
        },
        {
          img: "/zhyvylnyy-potik/4.webp",
          subTitle: "Причіп-цистерна ПЦ-8,0",
          id: "prychip-tsysterna-pts-8-0",
        },
        {
          img: "/zhyvylnyy-potik/5.webp",
          subTitle: "Автомобільний засіб підвезення питної води АЗППВ",
          id: "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv",
        },
        {
          img: "/zhyvylnyy-potik/6.webp",
          subTitle: "Автомобільна цистерна підвезення питної води АЦППВ-4,0",
          id: "acppv-4-0",
        },
        {
          img: "/zhyvylnyy-potik/7.webp",
          subTitle: "Автомобільна цистерна підвезення питної води АЦППВ-5,5",
          id: "acppv-5-5",
        },
      ],
    },
    products: [
      {
        id: "prychip-tsysterna-pts",
        title: "Причіп-цистерна ПЦ",
        modelCards: ["ПЦ"],
        isCustomDesign: false,
        video: "/zhyvylnyy-potik/1.mp4",
        videoPreview: "/zhyvylnyy-potik/1.webp",
        description: {
          about:
            "Причіп-цистерна - це спеціалізований причіп-цистерна, який ідеально підходить для перевезення рідких матеріалів - надійний, міцний та зручний у використанні.",
          purpose:
            "Підходить для сільського господарства, будівництва та забезпечення водою віддалених об'єктів.",
          features:
            "Обслуговування цистерни: наявність великої горловини цистерни (350 мм) та спеціальної площадки спрощує наповнення, обслуговування та санітарну обробку ємності.",
          advantages: [
            "Компактні розміри для маневреності.",
            "Витримує максимальне навантаження до 2000 кг (повна маса до 3000 кг).",
            "Широка колія (1700 мм) забезпечує стабільність під час руху з рідиною.",
            "Оснащений запасним колесом та площадкою для обслуговування горловини цистерни.",
          ],
        },
        images: [
          "/zhyvylnyy-potik/prc/1.webp",
          "/zhyvylnyy-potik/prc/3.webp",
          "/zhyvylnyy-potik/prc/2.webp",
        ],
        specs: {
          models: ["ПЦ"],
          rows: [
            {
              label: "Габарити, мм (максимальні): довжина/ширина/висота",
              values: ["1840 / 2000 / 1840"],
            },
            {
              label: "Вага без вантажу, кг",
              values: ["800"],
            },
            {
              label: "Максимальне навантаження, кг",
              values: ["До 2000"],
            },
            {
              label: "Загальна вага з вантажем, кг",
              values: ["До 3000"],
            },
            {
              label: "Діаметр горловини цистерни, мм",
              values: ["350"],
            },
            {
              label: "Ширина колії, мм",
              values: ["Мінімум 1700"],
            },
          ],
        },
      },
      {
        id: "prychip-tsysterna-tsv-2-0",
        title: "Причіп цистерна ЦВ-2,0",
        modelCards: ["ЦВ-2,0"],
        isCustomDesign: false,
        video: "/zhyvylnyy-potik/2.mp4",
        videoPreview: "/zhyvylnyy-potik/2.webp",
        description: {
          about:
            "Спеціалізований транспорт для перевезення води та харчових рідин. Герметична конструкція з харчовим матеріалом зберігає якість рідин під час транспортування, що особливо важливо для сільського господарства і харчової промисловості.",
          purpose:
            "Ідеальний для доставки води на ферми, у віддалені села і транспортування рідких продуктів.",
          features:
            "Причіп оснащений герметичною кришкою та насосом для зручного завантаження і розвантаження. Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
          advantages: [
            "Універсальність: підходить для води і різних харчових рідин.",
            "Гігієнічність і безпека: матеріали відповідають санітарним нормам.",
            "Міцність: корпус із нержавіючої сталі або алюмінію захищає від корозії.",
          ],
        },
        images: [
          "/zhyvylnyy-potik/prc20/3.webp",
          "/zhyvylnyy-potik/prc20/1.webp",
          "/zhyvylnyy-potik/prc20/2.webp",
        ],
        specs: {
          models: ["ЦВ-2,0"],
          rows: [
            {
              label: "Повна маса, без вантажу, кг",
              values: ["До 1500"],
            },
            {
              label: "Горловина цистерни, мм",
              values: ["500"],
            },
            {
              label: "Ширина колії, не менше мм",
              values: ["1900"],
            },
            {
              label: "Габаритні розміри, не більше: довжина / ширина / висота, мм",
              values: ["4500 x 2360 x 1950"],
            },
            {
              label: "Максимальне навантаження, кг",
              values: ["2000"],
            },
            {
              label: "Максимальна вага з вантажем, не більше, кг",
              values: ["3500"],
            },
            {
              label: "Матеріал цистерни, внутрішній",
              values: ["Харчова нержавіюча сталь (AISI 321 або аналог)"],
            },
            {
              label: "Матеріал цистерни, зовнішній",
              values: ["Технічна нержавіюча сталь (AISI 430 або аналог)"],
            },
            {
              label: "Диски / шини",
              values: ["R19.5x8.25 / R19.5 265/70 143"],
            },
            {
              label: "Кількість коліс",
              values: ["2+1"],
            },
          ],
        },
      },
      {
        id: "avtomobilnyy-palyvozapravnyk-apz",
        title: "Автомобільний паливозаправник АПЗ",
        modelCards: ["АПЗ-6,5", "АПЗ-8,0"],
        isCustomDesign: false,
        video: "/zhyvylnyy-potik/3.mp4",
        videoPreview: "/zhyvylnyy-potik/3.webp",
        description: {
          about:
            "Спеціалізований транспорт для перевезення води та харчових рідин. Герметична конструкція з харчових матеріалів зберігає якість рідин під час транспортування, що особливо важливо для сільського господарства і харчової промисловості.",
          purpose:
            "Ідеальний для доставки води на ферми, у віддалені села і транспортування рідких продуктів.",
          features:
            "Причіп оснащений герметичною кришкою та насосом для зручного завантаження і розвантаження. Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
          advantages: [
            "Універсальність: підходить для води і різних харчових рідин.",
            "Гігієнічність і безпека: матеріали відповідають санітарним нормам.",
            "Міцність: корпус із нержавіючої сталі або алюмінію захищає від корозії.",
          ],
        },
        images: [
          "/zhyvylnyy-potik/apz/1.webp",
          "/zhyvylnyy-potik/apz/3.webp",
          "/zhyvylnyy-potik/apz/2.webp",
        ],
        specs: {
          models: ["АПЗ-6,5", "АПЗ-8,0"],
          rows: [
            {
              label: "Об'єм цистерни, л",
              values: ["2500 / 4000", "4000 / 4000"],
            },
            {
              label: "Базове шасі",
              values: ["Daewoo 6AM420", "Daewoo 6AM420"],
            },
            {
              label: "Тип цистерни",
              values: ["Овальна, горизонтальна", "Овальна, горизонтальна"],
            },
            {
              label: "Кількість відсіків",
              values: ["2", "2"],
            },
            {
              label: "Габаритні розміри не більше, мм: довжина / ширина / висота",
              values: ["10 000 / 2 600 / 3 390", "10 000 / 2 600 / 3 390"],
            },
            {
              label: "Маса (не більше), кг: споряджена маса / повна маса",
              values: ["14 000 / 29 000", "14 000 / 29 000"],
            },
            {
              label: "Кількість осей",
              values: ["3", "3"],
            },
            {
              label: "Гальмівна система",
              values: ["Пневматична", "Пневматична"],
            },
            {
              label: "Кількість коліс",
              values: ["6+1 запасне", "6+1 запасне"],
            },
            {
              label: "Розмір шин",
              values: ["14.00R20", "14.00R20"],
            },
            {
              label: "Диски",
              values: ["10.00WX20", "10.00WX20"],
            },
            {
              label: "Платформа, ложемент",
              values: ["Зварна, стелева", "Зварна, стелева"],
            },
          ],
        },
      },
      {
        id: "prychip-tsysterna-pts-8-0",
        title: "Причіп-цистерна ПЦ-8,0",
        modelCards: ["ПЦ-8,0"],
        isCustomDesign: true,
        video: "/zhyvylnyy-potik/4.mp4",
        videoPreview: "/zhyvylnyy-potik/4.webp",
        description: {
          about:
            "ПЦ-8,0 призначений для транспортування та короткочасного зберігання палива об'ємом до 8 м³ у польових умовах.",
          purpose:
            "Транспортування пального різними шляхами, включно з бездоріжжям. Працює при температурах від -40 до +45°C і вологості до 98% при +25°C.",
          features:
            "Овальна горизонтальна цистерна об'ємом 8 м³, 1 відсік. Зручне та безпечне наповнення паливом. Пневматична двоконтурна гальмівна система з EBS.",
          advantages: [
            "4 перегородки для гасіння гідроудару.",
            "Зчіпний пристрій під 90/40 мм.",
            "Міцна зварна сталева рама зі сталі 09Г2С або S355.",
            "Наповнення через заливний люк або нижній трубопровід.",
            "Підходить для використання в складних кліматичних умовах.",
          ],
        },
        images: [
          "/zhyvylnyy-potik/pc8/1.webp",
          "/zhyvylnyy-potik/pc8/3.webp",
          "/zhyvylnyy-potik/pc8/2.webp",
        ],
        specs: {
          models: ["Причіп-цистерна ПЦ-8,0"],
          rows: [
            {
              label: "Тип базового шасі",
              values: ["Двовісне підвищеної прохідності"],
            },
            {
              label: "Конструкція рами",
              values: [
                "Електрозварна, із високоміцної сталі 09Г2С або S355, \n в основі рами зварена балка двотаврової форми",
              ],
            },
            {
              label: "Підвіска",
              values: ["Ресорна"],
            },
            {
              label: "Гальмівна система",
              values: ["Пневматична, двоконтурна"],
            },
            {
              label: "Поворотний круг / розмір зчіпної петлі дишла",
              values: ["90/40"],
            },
            {
              label: "Електрообладнання",
              values: [
                "Схема постійного струму 24В від бортової мережі, \n світлосигнальне обладнання, задні ліхтарі, ліхтар номерного знаку, розетки, вилки та електроз'єднувачі в захисній оболонці",
              ],
            },
            {
              label: "Монтажна довжина рами причепа-шасі, не більше, мм",
              values: ["6 000"],
            },
            {
              label: "Висота до верхньої полки рами причепа-шасі, не більше, мм",
              values: ["1 350"],
            },
            {
              label: "Ширина рами причепа-шасі, не більше (по балках), мм",
              values: ["1 300"],
            },
            {
              label: "Ошиновка коліс",
              values: ["Односкатна"],
            },
            {
              label: "Кількість осей/коліс",
              values: ["2/4+1"],
            },
            {
              label: "Розмір дисків коліс",
              values: ["22,5х11.75"],
            },
            {
              label: "Розмір шин",
              values: ["385/65 R22,5"],
            },
            {
              label: "Габаритні розміри, не більше, мм: довжина / ширина / висота / ширина колії, +-1% / кліренс, не менше",
              values: ["8 200\n2 500\n3 000\n2 000\n300"],
            },
            {
              label: "Маса (не більше), кг: споряджена маса / повна маса",
              values: ["5 500 / 13 500"],
            },
            {
              label: "Розподіл повної маси, не більше, кг: передня вісь / задня вісь",
              values: ["8 000 / 8 000"],
            },
            {
              label: "Форма цистерни",
              values: ["Овал"],
            },
            {
              label: "Матеріал цистерни",
              values: ["Листовий метал товщиною не менше 5 мм зі сталі 09Г2С або S355"],
            },
            {
              label: "Перегородка для гасіння гідроудару товщиною не менше 3 мм, шт",
              values: ["4"],
            },
            {
              label: "Кількість окремих секцій цистерни, шт / об'єм цистерни, л +-0,5%",
              values: ["1 / 8 000"],
            },
            {
              label: "Час зливу палива з цистерни самопливом, не більше, хв",
              values: ["30"],
            },
            {
              label: "Час розгортання/згортання, не більше, хв",
              values: ["10"],
            },
            {
              label: "Обслуговуючий розрахунок, осіб",
              values: ["1"],
            },
            {
              label: "Допустима швидкість руху, не більше, км/год",
              values: ["80"],
            },
          ],
        },
      },
      {
        id: "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv",
        title: "Автомобільний засіб підвезення питної води АЗППВ",
        modelCards: ["АЗППВ"],
        isCustomDesign: true,
        video: "/zhyvylnyy-potik/5.mp4",
        videoPreview: "/zhyvylnyy-potik/5.webp",
        description: {
          about:
            "Автомобільний засіб підвезення питної води АЗППВ розроблений для оперативного та надійного транспортування рідини, що здатен ефективно працювати в складних кліматичних та дорожніх умовах.",
          purpose:
            "Призначений для швидкого і ефективного транспортування питної води в райони, що не мають доступу до централізованого водопостачання, а також для використання в екстрених ситуаціях, на будівельних майданчиках, у сільськогосподарських та інших потребах.",
          features:
            "Експлуатаційна місткість: 4000 л. Цистерна виготовлена з харчової нержавіючої сталі, є герметичною та термоізольованою, що гарантує збереження якості та температури води.",
          advantages: [
            "Повністю укомплектований та готовий до негайного використання транспортний засіб.",
            "Інтегрована конструкція на міцному шасі забезпечує довговічність та стабільну роботу в найважчих умовах.",
            "Система швидкого заповнення (не більше 15 хв) і подачі води дозволяє оперативно виконувати завдання.",
            "Обслуговування машини вимагає лише двох осіб, що мінімізує витрати на персонал.",
            "Виготовляється під будь-яке шасі.",
          ],
        },
        images: ["/zhyvylnyy-potik/azppv/1.webp", "/zhyvylnyy-potik/azppv/2.webp"],
        specs: {
          models: ["Автомобільний засіб підвезення питної води АЗППВ"],
          rows: [
            {
              label: "Базове шасі",
              values: ["Автомобіль ЗіЛ-131"],
            },
            {
              label: "Габаритні розміри зразка (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%",
              values: ["7000 / 2600 / 2800"],
            },
            {
              label: "Маса (не більше), кг: споряджена маса +-3% / повна маса +-3%",
              values: ["8600 / 12650"],
            },
            {
              label: "Тип цистерни",
              values: ["Герметична, термоізольована"],
            },
            {
              label: "Експлуатаційна місткість (не менше), л",
              values: ["4000+-3%"],
            },
            {
              label: "Матеріал цистерни",
              values: [
                "Харчова нержавіюча сталь (AISI 321/304), утеплення пінополіуретаном, зовнішня обшивка зі сталі S235",
              ],
            },
            {
              label: "Перегородка для гасіння гідроудару з нержавіючої сталі (AISI 321/304), шт",
              values: ["2"],
            },
            {
              label: "Горловина діаметром 500 мм, шт",
              values: ["1"],
            },
            {
              label: "Відсік (ящик) для зберігання обладнання, шт",
              values: ["3"],
            },
            {
              label: "Насос (мотопомпа): продуктивність (не менше), л/хв / висота всмоктування (не менше), м",
              values: ["500 / 4"],
            },
            {
              label: "Витрата роздавальної системи через один рукав (не менше), л/хв",
              values: ["120"],
            },
            {
              label: "Час заповнення цистерни насосом (мотопомпою), не більше, хв",
              values: ["15"],
            },
            {
              label: "Час згортання-розгортання (не більше), хв",
              values: ["5-10"],
            },
            {
              label: "Обслуговуючий розрахунок, осіб",
              values: ["2"],
            },
          ],
        },
      },
      {
        id: "acppv-4-0",
        title: "Автомобільна цистерна підвезення питної води АЦППВ-4,0",
        modelCards: ["АЦППВ-4,0"],
        isCustomDesign: true,
        video: "/zhyvylnyy-potik/6.mp4",
        videoPreview: "/zhyvylnyy-potik/6.webp",
        description: {
          about:
            "Автомобільна цистерна підвезення питної води АЦППВ-4,0 — це спеціалізована надбудова, що є самостійним модулем, який перетворює звичайний автомобіль на функціональний засіб для транспортування питної води та рідких харчових продуктів.",
          purpose:
            "Перевезення та короткочасне зберігання питної води та рідких харчових продуктів на польових ділянках, фермах та агропідприємствах.",
          features:
            "Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру. Експлуатаційна місткість: 4000 л.",
          advantages: [
            "Надійне водопостачання у польових умовах без сторонніх джерел.",
            "Швидке та просте обслуговування.",
            "Міцна конструкція для тривалої та безпечної експлуатації.",
            "Продумана конструкція з внутрішніми перегородками робить транспортування безпечнішим та стабільнішим.",
            "Використання високоякісної сталі та міцного шасі гарантує тривалий термін експлуатації.",
            "Наявність спеціальних ящиків для інструментів та рукавів забезпечує порядок та легкий доступ до обладнання.",
            "Виконання під будь-яке шасі.",
          ],
        },
        images: ["/zhyvylnyy-potik/acppv4/1.webp", "/zhyvylnyy-potik/acppv4/2.webp"],
        specs: {
          models: ["Автомобільна цистерна підвезення питної води АЦППВ-4,0"],
          rows: [
            {
              label: "Цистерна, л",
              values: ["4000"],
            },
            {
              label: "Габаритні розміри цистерни (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%",
              values: ["3555 / 1900 / 1415"],
            },
            {
              label: "Маса (не більше), кг: маса цистерни +-3% / споряджена маса +-3% / повна маса +-3%",
              values: ["975 / 1560 / 5560"],
            },
            {
              label: "Тип цистерни",
              values: ["Герметична, термоізольована"],
            },
            {
              label: "Експлуатаційна місткість (не менше), л",
              values: ["4000+-3%"],
            },
            {
              label: "Матеріал",
              values: [
                "Харчова нержавіюча сталь (AISI 321/304), утеплення пінополіуретаном, зовнішня обшивка зі сталі S235",
              ],
            },
            {
              label: "Перегородка для гасіння гідроудару з нержавіючої сталі (AISI 321/304), шт",
              values: ["2"],
            },
            {
              label: "Горловина з герметичною кришкою, шт",
              values: ["1"],
            },
            {
              label: "Відсік (ящик) для зберігання обладнання, шт",
              values: ["2"],
            },
            {
              label: "Насос (мотопомпа): продуктивність (не менше), л/хв / висота всмоктування (не менше), м",
              values: ["500 / 4"],
            },
            {
              label: "Рукава напірно-всмоктувальні: діаметр / довжина (не менше) / кількість, шт",
              values: ["50 / 3 000 / 3"],
            },
            {
              label: "Рукава роздавальні з швидкозмінними фланцями: діаметр / довжина (не менше) / кількість, шт",
              values: ["50 / 5 000 / 2"],
            },
            {
              label: "Роздавальна гребінка на 4 виходи, кількість, шт",
              values: ["1"],
            },
            {
              label: "Вузол видачі DN50, шт",
              values: ["1"],
            },
            {
              label: "Запірний кран для під'єднання до роздавального рукава, кількість, шт",
              values: ["1"],
            },
            {
              label: "Витрата роздавальної системи через один рукав (не менше), л/хв",
              values: ["120"],
            },
            {
              label: "Час заповнення цистерни насосом (мотопомпою), не більше, хв",
              values: ["15"],
            },
            {
              label: "Час згортання-розгортання (не більше), хв",
              values: ["10"],
            },
            {
              label: "Обслуговуючий розрахунок, осіб",
              values: ["2"],
            },
          ],
        },
      },
      {
        id: "acppv-5-5",
        title: "Автомобільна цистерна підвезення питної води АЦППВ-5,5",
        modelCards: ["АЦППВ-5,5"],
        isCustomDesign: true,
        video: "/zhyvylnyy-potik/7.mp4",
        videoPreview: "/zhyvylnyy-potik/7.webp",
        description: {
          about:
            "Автомобільна цистерна підвезення питної води АЦППВ 5,5 — це сучасний транспортний засіб, призначений для швидкого та безпечного перевезення великих об'ємів питної води та рідких харчових продуктів.",
          purpose:
            "Підходить для використання в сільськогосподарській, комунальній та будівельній сферах.",
          features:
            "Цистерна виготовлена з харчової нержавіючої сталі AISI 304, що запобігає корозії та гарантує гігієнічність. Високий кліренс (336 мм) та спеціальні шини 365/85 R20 забезпечують відмінну прохідність на бездоріжжі.",
          advantages: [
            "Цистерна об'ємом 5,500 літрів дозволяє доставляти значний об'єм води за один рейс.",
            "Збільшений об'єм цистерни скорочує кількість рейсів, що заощаджує час та паливо.",
            "Продумана конструкція з внутрішніми перегородками робить транспортування безпечнішим та стабільнішим.",
            "Використання високоякісної сталі та міцного шасі гарантує тривалий термін експлуатації.",
            "Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
            "Наявність спеціальних ящиків для інструментів та рукавів забезпечує порядок та легкий доступ до обладнання.",
          ],
        },
        images: ["/zhyvylnyy-potik/accpv55/1.webp", "/zhyvylnyy-potik/accpv55/2.webp"],
        specs: {
          models: ["Автомобільна цистерна підвезення питної води АЦППВ 5.5"],
          rows: [
            {
              label: "Цистерна, л",
              values: ["5500"],
            },
            {
              label: "Матеріал цистерни",
              values: ["AISI 304"],
            },
            {
              label: "Споряджена маса",
              values: ["До 8 500 кг"],
            },
            {
              label: "Повна маса, кг",
              values: ["14 000"],
            },
            {
              label: "Ємність",
              values: ["1"],
            },
            {
              label: "Перегородки",
              values: ["4"],
            },
            {
              label: "Шасі",
              values: ["RENAULT TRUCKS D 14 HIGH K 4100"],
            },
            {
              label: "Кліренс з навантаженням, мм",
              values: ["336"],
            },
            {
              label: "Максимальна потужність, кВт",
              values: ["206"],
            },
            {
              label: "Шини",
              values: ["365/85 R20"],
            },
            {
              label: "Напірно-всмоктувальні рукави",
              values: ["3 шт по 4 м"],
            },
            {
              label: "Напірний рукав",
              values: ["3 шт по 4 м"],
            },
            {
              label: "Фільтр грубої очистки води, шт",
              values: ["1"],
            },
            {
              label: "Мотопомпа",
              values: ["Stihl Wp 300"],
            },
            {
              label: "Люк-лаз DN 500, шт",
              values: ["2"],
            },
          ],
        },
      },
    ],
  };

  if (language === "en") {
    const labelMap: Record<string, string> = {
      "Габарити, мм (максимальні): довжина/ширина/висота":
        "Dimensions, mm (max): length/width/height",
      "Вага без вантажу, кг": "Weight without load, kg",
      "Максимальне навантаження, кг": "Maximum load, kg",
      "Загальна вага з вантажем, кг": "Gross weight with load, kg",
      "Діаметр горловини цистерни, мм": "Tank filler neck diameter, mm",
      "Ширина колії, мм": "Track width, mm",
      "Повна маса, без вантажу, кг": "Gross mass without cargo, kg",
      "Горловина цистерни, мм": "Tank hatch diameter, mm",
      "Ширина колії, не менше мм": "Track width, not less than, mm",
      "Габаритні розміри, не більше: довжина / ширина / висота, мм":
        "Overall dimensions, max: length / width / height, mm",
      "Максимальна вага з вантажем, не більше, кг":
        "Maximum gross weight, kg",
      "Матеріал цистерни, внутрішній": "Tank material, inner shell",
      "Матеріал цистерни, зовнішній": "Tank material, outer shell",
      "Диски / шини": "Rims / tires",
      "Кількість коліс": "Number of wheels",
      "Об'єм цистерни, л": "Tank volume, l",
      "Базове шасі": "Base chassis",
      "Тип цистерни": "Tank type",
      "Кількість відсіків": "Number of compartments",
      "Габаритні розміри не більше, мм: довжина / ширина / висота":
        "Overall dimensions, max, mm: length / width / height",
      "Маса (не більше), кг: споряджена маса / повна маса":
        "Mass (max), kg: curb / gross",
      "Кількість осей": "Number of axles",
      "Гальмівна система": "Brake system",
      "Розмір шин": "Tire size",
      "Диски": "Rims",
      "Платформа, ложемент": "Platform, saddle",
      "Тип базового шасі": "Base chassis type",
      "Конструкція рами": "Frame design",
      "Підвіска": "Suspension",
      "Поворотний круг / розмір зчіпної петлі дишла": "Turntable / drawbar eye size",
      "Електрообладнання": "Electrical equipment",
      "Монтажна довжина рами причепа-шасі, не більше, мм":
        "Mounting frame length, max, mm",
      "Висота до верхньої полки рами причепа-шасі, не більше, мм":
        "Height to top flange of trailer frame, max, mm",
      "Ширина рами причепа-шасі, не більше (по балках), мм":
        "Trailer frame width, max (beam-to-beam), mm",
      "Ошиновка коліс": "Wheel configuration",
      "Кількість осей/коліс": "Number of axles/wheels",
      "Розмір дисків коліс": "Wheel rim size",
      "Габаритні розміри, не більше, мм: довжина / ширина / висота / ширина колії, +-1% / кліренс, не менше":
        "Overall dimensions, max, mm: length / width / height / track width +-1% / min clearance",
      "Розподіл повної маси, не більше, кг: передня вісь / задня вісь":
        "Gross mass distribution, max, kg: front axle / rear axle",
      "Форма цистерни": "Tank shape",
      "Матеріал цистерни": "Tank material",
      "Перегородка для гасіння гідроудару товщиною не менше 3 мм, шт":
        "Anti-surge baffles (min 3 mm), pcs",
      "Кількість окремих секцій цистерни, шт / об'єм цистерни, л +-0,5%":
        "Number of tank sections, pcs / tank volume, l +-0.5%",
      "Час зливу палива з цистерни самопливом, не більше, хв":
        "Gravity fuel discharge time, max, min",
      "Час розгортання/згортання, не більше, хв": "Deployment/folding time, max, min",
      "Обслуговуючий розрахунок, осіб": "Operating crew, persons",
      "Допустима швидкість руху, не більше, км/год": "Allowed speed, max, km/h",
      "Габаритні розміри зразка (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%":
        "Sample overall dimensions (max), mm: length +-3% / width +-3% / height +-3%",
      "Маса (не більше), кг: споряджена маса +-3% / повна маса +-3%":
        "Mass (max), kg: curb +-3% / gross +-3%",
      "Експлуатаційна місткість (не менше), л": "Operating capacity (min), l",
      "Перегородка для гасіння гідроудару з нержавіючої сталі (AISI 321/304), шт":
        "Anti-surge stainless baffle (AISI 321/304), pcs",
      "Горловина діаметром 500 мм, шт": "500 mm hatch, pcs",
      "Відсік (ящик) для зберігання обладнання, шт":
        "Storage compartment (box) for equipment, pcs",
      "Насос (мотопомпа): продуктивність (не менше), л/хв / висота всмоктування (не менше), м":
        "Pump (motopump): flow rate (min), l/min / suction height (min), m",
      "Витрата роздавальної системи через один рукав (не менше), л/хв":
        "Dispensing system flow through one hose (min), l/min",
      "Час заповнення цистерни насосом (мотопомпою), не більше, хв":
        "Tank filling time by pump (motopump), max, min",
      "Час згортання-розгортання (не більше), хв": "Deployment/retraction time (max), min",
      "Цистерна, л": "Tank, l",
      "Габаритні розміри цистерни (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%":
        "Tank dimensions (max), mm: length +-3% / width +-3% / height +-3%",
      "Маса (не більше), кг: маса цистерни +-3% / споряджена маса +-3% / повна маса +-3%":
        "Mass (max), kg: tank mass +-3% / curb +-3% / gross +-3%",
      "Матеріал": "Material",
      "Горловина з герметичною кришкою, шт": "Sealed hatch with lid, pcs",
      "Рукава напірно-всмоктувальні: діаметр / довжина (не менше) / кількість, шт":
        "Suction/pressure hoses: diameter / length (min) / qty, pcs",
      "Рукава роздавальні з швидкозмінними фланцями: діаметр / довжина (не менше) / кількість, шт":
        "Dispensing hoses with quick flanges: diameter / length (min) / qty, pcs",
      "Роздавальна гребінка на 4 виходи, кількість, шт":
        "4-way distribution manifold, qty, pcs",
      "Вузол видачі DN50, шт": "DN50 dispensing unit, pcs",
      "Запірний кран для під'єднання до роздавального рукава, кількість, шт":
        "Shut-off valve for dispensing hose connection, qty, pcs",
      "Споряджена маса": "Curb weight",
      "Повна маса, кг": "Gross vehicle weight, kg",
      "Ємність": "Compartments",
      "Перегородки": "Baffles",
      "Шасі": "Chassis",
      "Кліренс з навантаженням, мм": "Ground clearance with load, mm",
      "Максимальна потужність, кВт": "Maximum power, kW",
      "Шини": "Tires",
      "Напірно-всмоктувальні рукави": "Suction/pressure hoses",
      "Напірний рукав": "Pressure hose",
      "Фільтр грубої очистки води, шт": "Coarse water filter, pcs",
      "Мотопомпа": "Motopump",
      "Люк-лаз DN 500, шт": "Manhole DN 500, pcs",
    };

    pageData.hero = {
      breadcrums: "hylen stream",
      title: "HYLEN STREAM",
      subTitle: "Water and Fuel Tanks",
      text: "Equipment in the HYLEN STREAM category ensures a continuous flow of resources in your operation. From water supply to refueling, it keeps processes stable and productive in any conditions.",
      cards: [
        { img: "/zhyvylnyy-potik/1.webp", subTitle: "Tank trailer PC", id: "prychip-tsysterna-pts" },
        { img: "/zhyvylnyy-potik/2.webp", subTitle: "Tank trailer CV-2.0", id: "prychip-tsysterna-tsv-2-0" },
        { img: "/zhyvylnyy-potik/3.webp", subTitle: "Fuel tanker APZ", id: "avtomobilnyy-palyvozapravnyk-apz" },
        { img: "/zhyvylnyy-potik/4.webp", subTitle: "Tank trailer PC-8.0", id: "prychip-tsysterna-pts-8-0" },
        { img: "/zhyvylnyy-potik/5.webp", subTitle: "Portable water supply vehicle AZPPV", id: "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv" },
        { img: "/zhyvylnyy-potik/6.webp", subTitle: "Potable water tanker ACPPV-4.0", id: "acppv-4-0" },
        { img: "/zhyvylnyy-potik/7.webp", subTitle: "Potable water tanker ACPPV-5.5", id: "acppv-5-5" },
      ],
    };

    pageData.products = pageData.products.map((product) => {
      const base = {
        ...product,
        specs: {
          ...product.specs,
          rows: product.specs.rows.map((row) => ({
            ...row,
            label: labelMap[row.label] ?? row.label,
          })),
        },
      };

      if (product.id === "prychip-tsysterna-pts") {
        return {
          ...base,
          title: "Tank trailer PC",
          modelCards: ["PC"],
          description: {
            about:
              "A specialized tank trailer for transporting liquids, designed to be reliable, durable, and easy to operate.",
            purpose:
              "Suitable for agriculture, construction, and water supply to remote sites.",
            features:
              "A large 350 mm filler neck and a service platform simplify filling, maintenance, and sanitation.",
            advantages: [
              "Compact dimensions for better maneuverability",
              "Maximum load up to 2000 kg (gross weight up to 3000 kg)",
              "Wide 1700 mm track for stability with liquid cargo",
              "Includes spare wheel and maintenance platform",
            ],
          },
        };
      }

      if (product.id === "prychip-tsysterna-tsv-2-0") {
        return {
          ...base,
          title: "Tank trailer CV-2.0",
          modelCards: ["CV-2.0"],
          description: {
            about:
              "Specialized transport for water and food liquids with a sealed food-grade design.",
            purpose:
              "Ideal for delivering water to farms and remote villages, and for transporting liquid products.",
            features:
              "Equipped with a sealed lid and pump for easy loading and unloading. Double-layer thermal insulation with polyurethane foam helps maintain temperature.",
            advantages: [
              "Suitable for water and various food liquids",
              "Sanitary-compliant materials ensure hygiene and safety",
              "Stainless steel or aluminum body provides corrosion resistance",
            ],
          },
        };
      }

      if (product.id === "avtomobilnyy-palyvozapravnyk-apz") {
        return {
          ...base,
          title: "Fuel tanker APZ",
          modelCards: ["APZ-6.5", "APZ-8.0"],
          description: {
            about:
              "Designed for transportation and short-term storage of fuel in field conditions.",
            purpose:
              "For transporting and mechanized refueling of machinery with filtered fuel.",
            features:
              "Fuel can be loaded and dispensed using onboard or external pump systems.",
            advantages: [
              "Reliable field and road operation",
              "Controlled and convenient fuel handling",
              "Adaptable to multiple vehicle chassis",
            ],
          },
        };
      }

      if (product.id === "prychip-tsysterna-pts-8-0") {
        return {
          ...base,
          title: "Tank trailer PC-8.0",
          modelCards: ["PC-8.0"],
          description: {
            about:
              "Designed for transportation and short-term storage of fuel up to 8 m3 in field conditions.",
            purpose:
              "Suitable for roads and off-road routes, operating from -40 to +45 C.",
            features:
              "8 m3 oval horizontal tank, safe filling, and pneumatic dual-circuit braking with EBS.",
            advantages: [
              "4 anti-surge baffles",
              "Durable welded steel frame",
              "Filling through top hatch or bottom pipeline",
              "Suitable for harsh climates",
            ],
          },
        };
      }

      if (product.id === "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv") {
        return {
          ...base,
          title: "Automotive Portable Water Supply Vehicle AZPPV",
          modelCards: ["AZPPV"],
          description: {
            about:
              "Designed for fast and reliable portable water transportation in difficult road and climate conditions.",
            purpose:
              "For water delivery to areas without centralized supply, emergencies, construction sites, and agriculture.",
            features:
              "4000 L hermetic, thermally insulated food-grade stainless steel tank.",
            advantages: [
              "Fully equipped and ready for use",
              "Durable integrated chassis-based design",
              "Fast filling and dispensing cycle",
              "Operated by only two people",
            ],
          },
          specs: {
            ...base.specs,
            models: ["Automotive Portable Water Supply Vehicle AZPPV"],
          },
        };
      }

      if (product.id === "acppv-4-0") {
        return {
          ...base,
          title: "Automotive Portable Water Tanker ACPPV-4.0",
          modelCards: ["ACPPV-4.0"],
          description: {
            about:
              "A specialized modular superstructure that transforms a vehicle into a portable water and liquid food transport unit.",
            purpose:
              "For transport and short-term storage of portable water and liquid food products in field conditions.",
            features:
              "Double-layer thermally insulated tank with polyurethane foam; operating capacity 4000 L.",
            advantages: [
              "Reliable water supply in field conditions",
              "Quick maintenance and operation",
              "Durable long-life construction",
              "Internal baffles improve transport stability",
            ],
          },
        };
      }

      return {
        ...base,
        title: "Automotive Portable Water Tanker ACPPV-5.5",
        modelCards: ["ACPPV-5.5"],
        description: {
          about:
            "Modern vehicle for safe and fast transportation of large volumes of portable water and liquid food products.",
          purpose:
            "Designed for agriculture, municipal services, and construction.",
          features:
            "AISI 304 food-grade stainless tank, 336 mm clearance, and 365/85 R20 tires for off-road use.",
          advantages: [
            "5500 L capacity for high-volume delivery",
            "Fewer trips and lower fuel use",
            "Internal baffles improve transport stability",
            "Thermally insulated double-layer tank",
          ],
        },
        specs: {
          ...base.specs,
          models: ["Automotive Portable Water Tanker ACPPV-5.5"],
        },
      };
    });
  }

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
      <ProductOtherTypesSlider excludeLink="/zhyvylnyy-potik" />
      <Footer />
    </div>
  );
}
