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
    breadcrums: { uk: "живильний потік", en: "hylen stream" },
    title: { uk: "ЖИВИЛЬНИЙ ПОТІК", en: "HYLEN STREAM" },
    subTitle: {
      uk: "Цистерни для води та пального",
      en: "Water and Fuel Tanks",
    },
    text: {
      uk: "Техніка категорії «Живильний потік» - забезпечує безперервний потік ресурсів у вашому господарстві. Від водопостачання до заправки техніки - вони підтримують ритм роботи, зберігаючи стабільність і продуктивність у будь-яких умовах.",
      en: "Equipment in the HYLEN STREAM category ensures a continuous flow of resources in your operation. From water supply to refueling, it keeps processes stable and productive in any conditions.",
    },
    cards: [
      {
        img: "/zhyvylnyy-potik/1.webp",
        subTitle: { uk: "Причіп-цистерна ПЦ", en: "Tank trailer PC" },
        id: "prychip-tsysterna-pts",
      },
      {
        img: "/zhyvylnyy-potik/2.webp",
        subTitle: {
          uk: "Причіп цистерна ЦВ-2,0",
          en: "Tank trailer CV-2.0",
        },
        id: "prychip-tsysterna-tsv-2-0",
      },
      {
        img: "/zhyvylnyy-potik/3.webp",
        subTitle: {
          uk: "Автомобільний паливозаправник АПЗ",
          en: "Fuel tanker APZ",
        },
        id: "avtomobilnyy-palyvozapravnyk-apz",
      },
      {
        img: "/zhyvylnyy-potik/4.webp",
        subTitle: {
          uk: "Причіп-цистерна ПЦ-8,0",
          en: "Tank trailer PC-8.0",
        },
        id: "prychip-tsysterna-pts-8-0",
      },
      {
        img: "/zhyvylnyy-potik/5.webp",
        subTitle: {
          uk: "Автомобільний засіб підвезення питної води АЗППВ",
          en: "Potable water supply vehicle AZPPV",
        },
        id: "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv",
      },
      {
        img: "/zhyvylnyy-potik/6.webp",
        subTitle: {
          uk: "Автомобільна цистерна підвезення питної води АЦППВ-4,0",
          en: "Potable water tanker ACPPV-4.0",
        },
        id: "acppv-4-0",
      },
      {
        img: "/zhyvylnyy-potik/7.webp",
        subTitle: {
          uk: "Автомобільна цистерна підвезення питної води АЦППВ-5,5",
          en: "Potable water tanker ACPPV-5.5",
        },
        id: "acppv-5-5",
      },
    ],
  },
  products: [
    {
      id: "prychip-tsysterna-pts",
      title: { uk: "Причіп-цистерна ПЦ", en: "Tank trailer PC" },
      modelCards: { uk: ["ПЦ"], en: ["PC"] },
      isCustomDesign: false,
      video: "/zhyvylnyy-potik/1.mp4",
      videoPreview: "/zhyvylnyy-potik/1.webp",
      description: {
        about: {
          uk: "Причіп-цистерна - це спеціалізований причіп-цистерна, який ідеально підходить для перевезення рідких матеріалів - надійний, міцний та зручний у використанні.",
          en: "A specialized tank trailer for transporting liquids, designed to be reliable, durable, and easy to operate.",
        },
        purpose: {
          uk: "Підходить для сільського господарства, будівництва та забезпечення водою віддалених об'єктів.",
          en: "Suitable for agriculture, construction, and water supply to remote sites.",
        },
        features: {
          uk: "Обслуговування цистерни: наявність великої горловини цистерни (350 мм) та спеціальної площадки спрощує наповнення, обслуговування та санітарну обробку ємності.",
          en: "A large 350 mm filler neck and a service platform simplify filling, maintenance, and sanitation.",
        },
        advantages: {
          uk: [
            "Компактні розміри для маневреності.",
            "Витримує максимальне навантаження до 2000 кг (повна маса до 3000 кг).",
            "Широка колія (1700 мм) забезпечує стабільність під час руху з рідиною.",
            "Оснащений запасним колесом та площадкою для обслуговування горловини цистерни.",
          ],
          en: [
            "Compact dimensions for better maneuverability",
            "Maximum load up to 2000 kg (gross weight up to 3000 kg)",
            "Wide 1700 mm track for stability with liquid cargo",
            "Includes spare wheel and maintenance platform",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/prc/1.webp",
        "/zhyvylnyy-potik/prc/3.webp",
        "/zhyvylnyy-potik/prc/2.webp",
      ],
      specs: {
        models: { uk: ["ПЦ"], en: ["PC"] },
        rows: [
          {
            label: {
              uk: "Габарити, мм (максимальні): довжина/ширина/висота",
              en: "Dimensions, mm (max): length/width/height",
            },
            values: ["1840 / 2000 / 1840"],
          },
          {
            label: {
              uk: "Вага без вантажу, кг",
              en: "Weight without load, kg",
            },
            values: ["800"],
          },
          {
            label: {
              uk: "Максимальне навантаження, кг",
              en: "Maximum load, kg",
            },
            values: [{ uk: "До 2000", en: "Up to 2000" }],
          },
          {
            label: {
              uk: "Загальна вага з вантажем, кг",
              en: "Gross weight with load, kg",
            },
            values: [{ uk: "До 3000", en: "Up to 3000" }],
          },
          {
            label: {
              uk: "Діаметр горловини цистерни, мм",
              en: "Tank filler neck diameter, mm",
            },
            values: ["350"],
          },
          {
            label: { uk: "Ширина колії, мм", en: "Track width, mm" },
            values: [{ uk: "Мінімум 1700", en: "Minimum 1700" }],
          },
        ],
      },
    },
    {
      id: "prychip-tsysterna-tsv-2-0",
      title: {
        uk: "Причіп цистерна ЦВ-2,0",
        en: "Tank trailer CV-2.0",
      },
      modelCards: { uk: ["ЦВ-2,0"], en: ["CV-2.0"] },
      isCustomDesign: false,
      video: "/zhyvylnyy-potik/2.mp4",
      videoPreview: "/zhyvylnyy-potik/2.webp",
      description: {
        about: {
          uk: "Спеціалізований транспорт для перевезення води та харчових рідин. Герметична конструкція з харчовим матеріалом зберігає якість рідин під час транспортування, що особливо важливо для сільського господарства і харчової промисловості.",
          en: "Specialized transport for water and food liquids with a sealed food-grade design.",
        },
        purpose: {
          uk: "Ідеальний для доставки води на ферми, у віддалені села і транспортування рідких продуктів.",
          en: "Ideal for delivering water to farms and remote villages, and for transporting liquid products.",
        },
        features: {
          uk: "Причіп оснащений герметичною кришкою та насосом для зручного завантаження і розвантаження. Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
          en: "Equipped with a sealed lid and pump for easy loading and unloading. Double-layer thermal insulation with polyurethane foam helps maintain temperature.",
        },
        advantages: {
          uk: [
            "Універсальність: підходить для води і різних харчових рідин.",
            "Гігієнічність і безпека: матеріали відповідають санітарним нормам.",
            "Міцність: корпус із нержавіючої сталі або алюмінію захищає від корозії.",
          ],
          en: [
            "Suitable for water and various food liquids",
            "Sanitary-compliant materials ensure hygiene and safety",
            "Stainless steel or aluminum body provides corrosion resistance",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/prc20/3.webp",
        "/zhyvylnyy-potik/prc20/1.webp",
        "/zhyvylnyy-potik/prc20/2.webp",
      ],
      specs: {
        models: { uk: ["ЦВ-2,0"], en: ["CV-2.0"] },
        rows: [
          {
            label: {
              uk: "Повна маса, без вантажу, кг",
              en: "Gross mass without cargo, kg",
            },
            values: [{ uk: "До 1500", en: "Up to 1500" }],
          },
          {
            label: {
              uk: "Горловина цистерни, мм",
              en: "Tank hatch diameter, mm",
            },
            values: ["500"],
          },
          {
            label: {
              uk: "Ширина колії, не менше мм",
              en: "Track width, not less than, mm",
            },
            values: ["1900"],
          },
          {
            label: {
              uk: "Габаритні розміри, не більше: довжина / ширина / висота, мм",
              en: "Overall dimensions, max: length / width / height, mm",
            },
            values: ["4500 x 2360 x 1950"],
          },
          {
            label: {
              uk: "Максимальне навантаження, кг",
              en: "Maximum load, kg",
            },
            values: ["2000"],
          },
          {
            label: {
              uk: "Максимальна вага з вантажем, не більше, кг",
              en: "Maximum gross weight, kg",
            },
            values: ["3500"],
          },
          {
            label: {
              uk: "Матеріал цистерни, внутрішній",
              en: "Tank material, inner shell",
            },
            values: [
              {
                uk: "Харчова нержавіюча сталь (AISI 321 або аналог)",
                en: "Food-grade stainless steel (AISI 321 or equivalent)",
              },
            ],
          },
          {
            label: {
              uk: "Матеріал цистерни, зовнішній",
              en: "Tank material, outer shell",
            },
            values: [
              {
                uk: "Технічна нержавіюча сталь (AISI 430 або аналог)",
                en: "Technical stainless steel (AISI 430 or equivalent)",
              },
            ],
          },
          {
            label: { uk: "Диски / шини", en: "Rims / tires" },
            values: ["R19.5x8.25 / R19.5 265/70 143"],
          },
          {
            label: { uk: "Кількість коліс", en: "Number of wheels" },
            values: ["2+1"],
          },
        ],
      },
    },
    {
      id: "avtomobilnyy-palyvozapravnyk-apz",
      title: {
        uk: "Автомобільний паливозаправник АПЗ",
        en: "Fuel tanker APZ",
      },
      modelCards: {
        uk: ["АПЗ-6,5", "АПЗ-8,0"],
        en: ["APZ-6.5", "APZ-8.0"],
      },
      isCustomDesign: false,
      video: "/zhyvylnyy-potik/3.mp4",
      videoPreview: "/zhyvylnyy-potik/3.webp",
      description: {
        about: {
          uk: "Спеціалізований транспорт для перевезення води та харчових рідин. Герметична конструкція з харчових матеріалів зберігає якість рідин під час транспортування, що особливо важливо для сільського господарства і харчової промисловості.",
          en: "Designed for transportation and short-term storage of fuel in field conditions.",
        },
        purpose: {
          uk: "Ідеальний для доставки води на ферми, у віддалені села і транспортування рідких продуктів.",
          en: "For transporting and mechanized refueling of machinery with filtered fuel.",
        },
        features: {
          uk: "Причіп оснащений герметичною кришкою та насосом для зручного завантаження і розвантаження. Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
          en: "Fuel can be loaded and dispensed using onboard or external pump systems.",
        },
        advantages: {
          uk: [
            "Універсальність: підходить для води і різних харчових рідин.",
            "Гігієнічність і безпека: матеріали відповідають санітарним нормам.",
            "Міцність: корпус із нержавіючої сталі або алюмінію захищає від корозії.",
          ],
          en: [
            "Reliable field and road operation",
            "Controlled and convenient fuel handling",
            "Adaptable to multiple vehicle chassis",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/apz/1.webp",
        "/zhyvylnyy-potik/apz/3.webp",
        "/zhyvylnyy-potik/apz/2.webp",
      ],
      specs: {
        models: {
          uk: ["АПЗ-6,5", "АПЗ-8,0"],
          en: ["APZ-6.5", "APZ-8.0"],
        },
        rows: [
          {
            label: { uk: "Об'єм цистерни, л", en: "Tank volume, l" },
            values: ["2500 / 4000", "4000 / 4000"],
          },
          {
            label: { uk: "Базове шасі", en: "Base chassis" },
            values: ["Daewoo 6AM420", "Daewoo 6AM420"],
          },
          {
            label: { uk: "Тип цистерни", en: "Tank type" },
            values: [
              { uk: "Овальна, горизонтальна", en: "Oval, horizontal" },
              { uk: "Овальна, горизонтальна", en: "Oval, horizontal" },
            ],
          },
          {
            label: {
              uk: "Кількість відсіків",
              en: "Number of compartments",
            },
            values: ["2", "2"],
          },
          {
            label: {
              uk: "Габаритні розміри не більше, мм: довжина / ширина / висота",
              en: "Overall dimensions, max, mm: length / width / height",
            },
            values: [
              "10 000 / 2 600 / 3 390",
              "10 000 / 2 600 / 3 390",
            ],
          },
          {
            label: {
              uk: "Маса (не більше), кг: споряджена маса / повна маса",
              en: "Mass (max), kg: curb / gross",
            },
            values: ["14 000 / 29 000", "14 000 / 29 000"],
          },
          {
            label: { uk: "Кількість осей", en: "Number of axles" },
            values: ["3", "3"],
          },
          {
            label: { uk: "Гальмівна система", en: "Brake system" },
            values: [
              { uk: "Пневматична", en: "Pneumatic" },
              { uk: "Пневматична", en: "Pneumatic" },
            ],
          },
          {
            label: { uk: "Кількість коліс", en: "Number of wheels" },
            values: [
              { uk: "6+1 запасне", en: "6+1 spare" },
              { uk: "6+1 запасне", en: "6+1 spare" },
            ],
          },
          {
            label: { uk: "Розмір шин", en: "Tire size" },
            values: ["14.00R20", "14.00R20"],
          },
          {
            label: { uk: "Диски", en: "Rims" },
            values: ["10.00WX20", "10.00WX20"],
          },
          {
            label: { uk: "Платформа, ложемент", en: "Platform, saddle" },
            values: [
              { uk: "Зварна, стелева", en: "Welded, steel" },
              { uk: "Зварна, стелева", en: "Welded, steel" },
            ],
          },
        ],
      },
    },
    {
      id: "prychip-tsysterna-pts-8-0",
      title: {
        uk: "Причіп-цистерна ПЦ-8,0",
        en: "Tank trailer PC-8.0",
      },
      modelCards: { uk: ["ПЦ-8,0"], en: ["PC-8.0"] },
      isCustomDesign: true,
      video: "/zhyvylnyy-potik/4.mp4",
      videoPreview: "/zhyvylnyy-potik/4.webp",
      description: {
        about: {
          uk: "ПЦ-8,0 призначений для транспортування та короткочасного зберігання палива об'ємом до 8 м³ у польових умовах.",
          en: "Designed for transportation and short-term storage of fuel up to 8 m3 in field conditions.",
        },
        purpose: {
          uk: "Транспортування пального різними шляхами, включно з бездоріжжям. Працює при температурах від -40 до +45°C і вологості до 98% при +25°C.",
          en: "Suitable for roads and off-road routes, operating from -40 to +45 C.",
        },
        features: {
          uk: "Овальна горизонтальна цистерна об'ємом 8 м³, 1 відсік. Зручне та безпечне наповнення паливом. Пневматична двоконтурна гальмівна система з EBS.",
          en: "8 m3 oval horizontal tank, safe filling, and pneumatic dual-circuit braking with EBS.",
        },
        advantages: {
          uk: [
            "4 перегородки для гасіння гідроудару.",
            "Зчіпний пристрій під 90/40 мм.",
            "Міцна зварна сталева рама зі сталі 09Г2С або S355.",
            "Наповнення через заливний люк або нижній трубопровід.",
            "Підходить для використання в складних кліматичних умовах.",
          ],
          en: [
            "4 anti-surge baffles",
            "Durable welded steel frame",
            "Filling through top hatch or bottom pipeline",
            "Suitable for harsh climates",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/pc8/1.webp",
        "/zhyvylnyy-potik/pc8/3.webp",
        "/zhyvylnyy-potik/pc8/2.webp",
      ],
      specs: {
        models: {
          uk: ["Причіп-цистерна ПЦ-8,0"],
          en: ["Tank trailer PC-8.0"],
        },
        rows: [
          {
            label: { uk: "Тип базового шасі", en: "Base chassis type" },
            values: [
              {
                uk: "Двовісне підвищеної прохідності",
                en: "Two-axle high-mobility",
              },
            ],
          },
          {
            label: { uk: "Конструкція рами", en: "Frame design" },
            values: [
              {
                uk: "Електрозварна, із високоміцної сталі 09Г2С або S355, \n в основі рами зварена балка двотаврової форми",
                en: "Electric-welded, made of high-strength 09G2S or S355 steel; I-beam welded in the frame base",
              },
            ],
          },
          {
            label: { uk: "Підвіска", en: "Suspension" },
            values: [{ uk: "Ресорна", en: "Leaf spring" }],
          },
          {
            label: { uk: "Гальмівна система", en: "Brake system" },
            values: [
              { uk: "Пневматична, двоконтурна", en: "Pneumatic, dual-circuit" },
            ],
          },
          {
            label: {
              uk: "Поворотний круг / розмір зчіпної петлі дишла",
              en: "Turntable / drawbar eye size",
            },
            values: ["90/40"],
          },
          {
            label: { uk: "Електрообладнання", en: "Electrical equipment" },
            values: [
              {
                uk: "Схема постійного струму 24В від бортової мережі, \n світлосигнальне обладнання, задні ліхтарі, ліхтар номерного знаку, розетки, вилки та електроз'єднувачі в захисній оболонці",
                en: "24V DC circuit from onboard power; lighting equipment, rear lamps, license plate lamp, sockets, plugs, and protected electrical connectors",
              },
            ],
          },
          {
            label: {
              uk: "Монтажна довжина рами причепа-шасі, не більше, мм",
              en: "Mounting frame length, max, mm",
            },
            values: ["6 000"],
          },
          {
            label: {
              uk: "Висота до верхньої полки рами причепа-шасі, не більше, мм",
              en: "Height to top flange of trailer frame, max, mm",
            },
            values: ["1 350"],
          },
          {
            label: {
              uk: "Ширина рами причепа-шасі, не більше (по балках), мм",
              en: "Trailer frame width, max (beam-to-beam), mm",
            },
            values: ["1 300"],
          },
          {
            label: { uk: "Ошиновка коліс", en: "Wheel configuration" },
            values: [{ uk: "Односкатна", en: "Single" }],
          },
          {
            label: {
              uk: "Кількість осей/коліс",
              en: "Number of axles/wheels",
            },
            values: ["2/4+1"],
          },
          {
            label: { uk: "Розмір дисків коліс", en: "Wheel rim size" },
            values: ["22,5х11.75"],
          },
          {
            label: { uk: "Розмір шин", en: "Tire size" },
            values: ["385/65 R22,5"],
          },
          {
            label: {
              uk: "Габаритні розміри, не більше, мм: довжина / ширина / висота / ширина колії, +-1% / кліренс, не менше",
              en: "Overall dimensions, max, mm: length / width / height / track width +-1% / min clearance",
            },
            values: ["8 200\n2 500\n3 000\n2 000\n300"],
          },
          {
            label: {
              uk: "Маса (не більше), кг: споряджена маса / повна маса",
              en: "Mass (max), kg: curb / gross",
            },
            values: ["5 500 / 13 500"],
          },
          {
            label: {
              uk: "Розподіл повної маси, не більше, кг: передня вісь / задня вісь",
              en: "Gross mass distribution, max, kg: front axle / rear axle",
            },
            values: ["8 000 / 8 000"],
          },
          {
            label: { uk: "Форма цистерни", en: "Tank shape" },
            values: [{ uk: "Овал", en: "Oval" }],
          },
          {
            label: { uk: "Матеріал цистерни", en: "Tank material" },
            values: [
              {
                uk: "Листовий метал товщиною не менше 5 мм зі сталі 09Г2С або S355",
                en: "Sheet metal, thickness not less than 5 mm, made of 09G2S or S355 steel",
              },
            ],
          },
          {
            label: {
              uk: "Перегородка для гасіння гідроудару товщиною не менше 3 мм, шт",
              en: "Anti-surge baffles (min 3 mm), pcs",
            },
            values: ["4"],
          },
          {
            label: {
              uk: "Кількість окремих секцій цистерни, шт / об'єм цистерни, л +-0,5%",
              en: "Number of tank sections, pcs / tank volume, l +-0.5%",
            },
            values: ["1 / 8 000"],
          },
          {
            label: {
              uk: "Час зливу палива з цистерни самопливом, не більше, хв",
              en: "Gravity fuel discharge time, max, min",
            },
            values: ["30"],
          },
          {
            label: {
              uk: "Час розгортання/згортання, не більше, хв",
              en: "Deployment/folding time, max, min",
            },
            values: ["10"],
          },
          {
            label: {
              uk: "Обслуговуючий розрахунок, осіб",
              en: "Operating crew, persons",
            },
            values: ["1"],
          },
          {
            label: {
              uk: "Допустима швидкість руху, не більше, км/год",
              en: "Allowed speed, max, km/h",
            },
            values: ["80"],
          },
        ],
      },
    },
    {
      id: "avtomobilnyy-zasib-pidvezennya-pytnoyi-vody-azppv",
      title: {
        uk: "Автомобільний засіб підвезення питної води АЗППВ",
        en: "Automotive Potable Water Supply Vehicle AZPPV",
      },
      modelCards: { uk: ["АЗППВ"], en: ["AZPPV"] },
      isCustomDesign: true,
      video: "/zhyvylnyy-potik/5.mp4",
      videoPreview: "/zhyvylnyy-potik/5.webp",
      description: {
        about: {
          uk: "Автомобільний засіб підвезення питної води АЗППВ розроблений для оперативного та надійного транспортування рідини, що здатен ефективно працювати в складних кліматичних та дорожніх умовах.",
          en: "Designed for fast and reliable potable water transportation in difficult road and climate conditions.",
        },
        purpose: {
          uk: "Призначений для швидкого і ефективного транспортування питної води в райони, що не мають доступу до централізованого водопостачання, а також для використання в екстрених ситуаціях, на будівельних майданчиках, у сільськогосподарських та інших потребах.",
          en: "For water delivery to areas without centralized supply, emergencies, construction sites, and agriculture.",
        },
        features: {
          uk: "Експлуатаційна місткість: 4000 л. Цистерна виготовлена з харчової нержавіючої сталі, є герметичною та термоізольованою, що гарантує збереження якості та температури води.",
          en: "4000 L hermetic, thermally insulated food-grade stainless steel tank.",
        },
        advantages: {
          uk: [
            "Повністю укомплектований та готовий до негайного використання транспортний засіб.",
            "Інтегрована конструкція на міцному шасі забезпечує довговічність та стабільну роботу в найважчих умовах.",
            "Система швидкого заповнення (не більше 15 хв) і подачі води дозволяє оперативно виконувати завдання.",
            "Обслуговування машини вимагає лише двох осіб, що мінімізує витрати на персонал.",
            "Виготовляється під будь-яке шасі.",
          ],
          en: [
            "Fully equipped and ready for use",
            "Durable integrated chassis-based design",
            "Fast filling and dispensing cycle",
            "Operated by only two people",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/azppv/1.webp",
        "/zhyvylnyy-potik/azppv/2.webp",
      ],
      specs: {
        models: {
          uk: ["Автомобільний засіб підвезення питної води АЗППВ"],
          en: ["Automotive Potable Water Supply Vehicle AZPPV"],
        },
        rows: [
          {
            label: { uk: "Базове шасі", en: "Base chassis" },
            values: [{ uk: "Автомобіль ЗіЛ-131", en: "ZIL-131 vehicle" }],
          },
          {
            label: {
              uk: "Габаритні розміри зразка (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%",
              en: "Sample overall dimensions (max), mm: length +-3% / width +-3% / height +-3%",
            },
            values: ["7000 / 2600 / 2800"],
          },
          {
            label: {
              uk: "Маса (не більше), кг: споряджена маса +-3% / повна маса +-3%",
              en: "Mass (max), kg: curb +-3% / gross +-3%",
            },
            values: ["8600 / 12650"],
          },
          {
            label: { uk: "Тип цистерни", en: "Tank type" },
            values: [
              {
                uk: "Герметична, термоізольована",
                en: "Sealed, thermally insulated",
              },
            ],
          },
          {
            label: {
              uk: "Експлуатаційна місткість (не менше), л",
              en: "Operating capacity (min), l",
            },
            values: ["4000+-3%"],
          },
          {
            label: { uk: "Матеріал цистерни", en: "Tank material" },
            values: [
              {
                uk: "Харчова нержавіюча сталь (AISI 321/304), утеплення пінополіуретаном, зовнішня обшивка зі сталі S235",
                en: "Food-grade stainless steel (AISI 321/304), polyurethane foam insulation, outer cladding from S235 steel",
              },
            ],
          },
          {
            label: {
              uk: "Перегородка для гасіння гідроудару з нержавіючої сталі (AISI 321/304), шт",
              en: "Anti-surge stainless baffle (AISI 321/304), pcs",
            },
            values: ["2"],
          },
          {
            label: {
              uk: "Горловина діаметром 500 мм, шт",
              en: "500 mm hatch, pcs",
            },
            values: ["1"],
          },
          {
            label: {
              uk: "Відсік (ящик) для зберігання обладнання, шт",
              en: "Storage compartment (box) for equipment, pcs",
            },
            values: ["3"],
          },
          {
            label: {
              uk: "Насос (мотопомпа): продуктивність (не менше), л/хв / висота всмоктування (не менше), м",
              en: "Pump (motopump): flow rate (min), l/min / suction height (min), m",
            },
            values: ["500 / 4"],
          },
          {
            label: {
              uk: "Витрата роздавальної системи через один рукав (не менше), л/хв",
              en: "Dispensing system flow through one hose (min), l/min",
            },
            values: ["120"],
          },
          {
            label: {
              uk: "Час заповнення цистерни насосом (мотопомпою), не більше, хв",
              en: "Tank filling time by pump (motopump), max, min",
            },
            values: ["15"],
          },
          {
            label: {
              uk: "Час згортання-розгортання (не більше), хв",
              en: "Deployment/retraction time (max), min",
            },
            values: ["5-10"],
          },
          {
            label: {
              uk: "Обслуговуючий розрахунок, осіб",
              en: "Operating crew, persons",
            },
            values: ["2"],
          },
        ],
      },
    },
    {
      id: "acppv-4-0",
      title: {
        uk: "Автомобільна цистерна підвезення питної води АЦППВ-4,0",
        en: "Automotive Potable Water Tanker ACPPV-4.0",
      },
      modelCards: { uk: ["АЦППВ-4,0"], en: ["ACPPV-4.0"] },
      isCustomDesign: true,
      video: "/zhyvylnyy-potik/6.mp4",
      videoPreview: "/zhyvylnyy-potik/6.webp",
      description: {
        about: {
          uk: "Автомобільна цистерна підвезення питної води АЦППВ-4,0 — це спеціалізована надбудова, що є самостійним модулем, який перетворює звичайний автомобіль на функціональний засіб для транспортування питної води та рідких харчових продуктів.",
          en: "A specialized modular superstructure that transforms a vehicle into a potable water and liquid food transport unit.",
        },
        purpose: {
          uk: "Перевезення та короткочасне зберігання питної води та рідких харчових продуктів на польових ділянках, фермах та агропідприємствах.",
          en: "For transport and short-term storage of potable water and liquid food products in field conditions.",
        },
        features: {
          uk: "Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру. Експлуатаційна місткість: 4000 л.",
          en: "Double-layer thermally insulated tank with polyurethane foam; operating capacity 4000 L.",
        },
        advantages: {
          uk: [
            "Надійне водопостачання у польових умовах без сторонніх джерел.",
            "Швидке та просте обслуговування.",
            "Міцна конструкція для тривалої та безпечної експлуатації.",
            "Продумана конструкція з внутрішніми перегородками робить транспортування безпечнішим та стабільнішим.",
            "Використання високоякісної сталі та міцного шасі гарантує тривалий термін експлуатації.",
            "Наявність спеціальних ящиків для інструментів та рукавів забезпечує порядок та легкий доступ до обладнання.",
            "Виконання під будь-яке шасі.",
          ],
          en: [
            "Reliable water supply in field conditions",
            "Quick maintenance and operation",
            "Durable long-life construction",
            "Internal baffles improve transport stability",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/acppv4/1.webp",
        "/zhyvylnyy-potik/acppv4/2.webp",
      ],
      specs: {
        models: {
          uk: ["Автомобільна цистерна підвезення питної води АЦППВ-4,0"],
          en: ["Automotive Potable Water Tanker ACPPV-4.0"],
        },
        rows: [
          {
            label: { uk: "Цистерна, л", en: "Tank, l" },
            values: ["4000"],
          },
          {
            label: {
              uk: "Габаритні розміри цистерни (не більше), мм: довжина +-3% / ширина +-3% / висота +-3%",
              en: "Tank dimensions (max), mm: length +-3% / width +-3% / height +-3%",
            },
            values: ["3555 / 1900 / 1415"],
          },
          {
            label: {
              uk: "Маса (не більше), кг: маса цистерни +-3% / споряджена маса +-3% / повна маса +-3%",
              en: "Mass (max), kg: tank mass +-3% / curb +-3% / gross +-3%",
            },
            values: ["975 / 1560 / 5560"],
          },
          {
            label: { uk: "Тип цистерни", en: "Tank type" },
            values: [
              {
                uk: "Герметична, термоізольована",
                en: "Sealed, thermally insulated",
              },
            ],
          },
          {
            label: {
              uk: "Експлуатаційна місткість (не менше), л",
              en: "Operating capacity (min), l",
            },
            values: ["4000+-3%"],
          },
          {
            label: { uk: "Матеріал", en: "Material" },
            values: [
              {
                uk: "Харчова нержавіюча сталь (AISI 321/304), утеплення пінополіуретаном, зовнішня обшивка зі сталі S235",
                en: "Food-grade stainless steel (AISI 321/304), polyurethane foam insulation, outer cladding from S235 steel",
              },
            ],
          },
          {
            label: {
              uk: "Перегородка для гасіння гідроудару з нержавіючої сталі (AISI 321/304), шт",
              en: "Anti-surge stainless baffle (AISI 321/304), pcs",
            },
            values: ["2"],
          },
          {
            label: {
              uk: "Горловина з герметичною кришкою, шт",
              en: "Sealed hatch with lid, pcs",
            },
            values: ["1"],
          },
          {
            label: {
              uk: "Відсік (ящик) для зберігання обладнання, шт",
              en: "Storage compartment (box) for equipment, pcs",
            },
            values: ["2"],
          },
          {
            label: {
              uk: "Насос (мотопомпа): продуктивність (не менше), л/хв / висота всмоктування (не менше), м",
              en: "Pump (motopump): flow rate (min), l/min / suction height (min), m",
            },
            values: ["500 / 4"],
          },
          {
            label: {
              uk: "Рукава напірно-всмоктувальні: діаметр / довжина (не менше) / кількість, шт",
              en: "Suction/pressure hoses: diameter / length (min) / qty, pcs",
            },
            values: ["50 / 3 000 / 3"],
          },
          {
            label: {
              uk: "Рукава роздавальні з швидкозмінними фланцями: діаметр / довжина (не менше) / кількість, шт",
              en: "Dispensing hoses with quick flanges: diameter / length (min) / qty, pcs",
            },
            values: ["50 / 5 000 / 2"],
          },
          {
            label: {
              uk: "Роздавальна гребінка на 4 виходи, кількість, шт",
              en: "4-way distribution manifold, qty, pcs",
            },
            values: ["1"],
          },
          {
            label: { uk: "Вузол видачі DN50, шт", en: "DN50 dispensing unit, pcs" },
            values: ["1"],
          },
          {
            label: {
              uk: "Запірний кран для під'єднання до роздавального рукава, кількість, шт",
              en: "Shut-off valve for dispensing hose connection, qty, pcs",
            },
            values: ["1"],
          },
          {
            label: {
              uk: "Витрата роздавальної системи через один рукав (не менше), л/хв",
              en: "Dispensing system flow through one hose (min), l/min",
            },
            values: ["120"],
          },
          {
            label: {
              uk: "Час заповнення цистерни насосом (мотопомпою), не більше, хв",
              en: "Tank filling time by pump (motopump), max, min",
            },
            values: ["15"],
          },
          {
            label: {
              uk: "Час згортання-розгортання (не більше), хв",
              en: "Deployment/retraction time (max), min",
            },
            values: ["10"],
          },
          {
            label: {
              uk: "Обслуговуючий розрахунок, осіб",
              en: "Operating crew, persons",
            },
            values: ["2"],
          },
        ],
      },
    },
    {
      id: "acppv-5-5",
      title: {
        uk: "Автомобільна цистерна підвезення питної води АЦППВ-5,5",
        en: "Automotive Potable Water Tanker ACPPV-5.5",
      },
      modelCards: { uk: ["АЦППВ-5,5"], en: ["ACPPV-5.5"] },
      isCustomDesign: true,
      video: "/zhyvylnyy-potik/7.mp4",
      videoPreview: "/zhyvylnyy-potik/7.webp",
      description: {
        about: {
          uk: "Автомобільна цистерна підвезення питної води АЦППВ 5,5 — це сучасний транспортний засіб, призначений для швидкого та безпечного перевезення великих об'ємів питної води та рідких харчових продуктів.",
          en: "Modern vehicle for safe and fast transportation of large volumes of potable water and liquid food products.",
        },
        purpose: {
          uk: "Підходить для використання в сільськогосподарській, комунальній та будівельній сферах.",
          en: "Designed for agriculture, municipal services, and construction.",
        },
        features: {
          uk: "Цистерна виготовлена з харчової нержавіючої сталі AISI 304, що запобігає корозії та гарантує гігієнічність. Високий кліренс (336 мм) та спеціальні шини 365/85 R20 забезпечують відмінну прохідність на бездоріжжі.",
          en: "AISI 304 food-grade stainless tank, 336 mm clearance, and 365/85 R20 tires for off-road use.",
        },
        advantages: {
          uk: [
            "Цистерна об'ємом 5,500 літрів дозволяє доставляти значний об'єм води за один рейс.",
            "Збільшений об'єм цистерни скорочує кількість рейсів, що заощаджує час та паливо.",
            "Продумана конструкція з внутрішніми перегородками робить транспортування безпечнішим та стабільнішим.",
            "Використання високоякісної сталі та міцного шасі гарантує тривалий термін експлуатації.",
            "Термоізольована цистерна, виконана з двох шарів і утеплена пінополіуретаном, що дозволяє зберігати температуру.",
            "Наявність спеціальних ящиків для інструментів та рукавів забезпечує порядок та легкий доступ до обладнання.",
          ],
          en: [
            "5500 L capacity for high-volume delivery",
            "Fewer trips and lower fuel use",
            "Internal baffles improve transport stability",
            "Thermally insulated double-layer tank",
          ],
        },
      },
      images: [
        "/zhyvylnyy-potik/accpv55/1.webp",
        "/zhyvylnyy-potik/accpv55/2.webp",
      ],
      specs: {
        models: {
          uk: ["Автомобільна цистерна підвезення питної води АЦППВ 5.5"],
          en: ["Automotive Potable Water Tanker ACPPV-5.5"],
        },
        rows: [
          {
            label: { uk: "Цистерна, л", en: "Tank, l" },
            values: ["5500"],
          },
          {
            label: { uk: "Матеріал цистерни", en: "Tank material" },
            values: ["AISI 304"],
          },
          {
            label: { uk: "Споряджена маса", en: "Curb weight" },
            values: [{ uk: "До 8 500 кг", en: "Up to 8 500 kg" }],
          },
          {
            label: { uk: "Повна маса, кг", en: "Gross vehicle weight, kg" },
            values: ["14 000"],
          },
          {
            label: { uk: "Ємність", en: "Compartments" },
            values: ["1"],
          },
          {
            label: { uk: "Перегородки", en: "Baffles" },
            values: ["4"],
          },
          {
            label: { uk: "Шасі", en: "Chassis" },
            values: ["RENAULT TRUCKS D 14 HIGH K 4100"],
          },
          {
            label: {
              uk: "Кліренс з навантаженням, мм",
              en: "Ground clearance with load, mm",
            },
            values: ["336"],
          },
          {
            label: {
              uk: "Максимальна потужність, кВт",
              en: "Maximum power, kW",
            },
            values: ["206"],
          },
          {
            label: { uk: "Шини", en: "Tires" },
            values: ["365/85 R20"],
          },
          {
            label: {
              uk: "Напірно-всмоктувальні рукави",
              en: "Suction/pressure hoses",
            },
            values: [{ uk: "3 шт по 4 м", en: "3 pcs x 4 m" }],
          },
          {
            label: { uk: "Напірний рукав", en: "Pressure hose" },
            values: [{ uk: "3 шт по 4 м", en: "3 pcs x 4 m" }],
          },
          {
            label: {
              uk: "Фільтр грубої очистки води, шт",
              en: "Coarse water filter, pcs",
            },
            values: ["1"],
          },
          {
            label: { uk: "Мотопомпа", en: "Motopump" },
            values: ["Stihl Wp 300"],
          },
          {
            label: { uk: "Люк-лаз DN 500, шт", en: "Manhole DN 500, pcs" },
            values: ["2"],
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
      <ProductOtherTypesSlider excludeLink="/zhyvylnyy-potik" />
      <Footer />
    </div>
  );
}
