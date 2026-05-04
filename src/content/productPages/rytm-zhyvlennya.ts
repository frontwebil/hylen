import type { ProductPageData } from "@/Types/productData";

export const pageDataFallback: ProductPageData = {
  hero: {
    breadcrums: { uk: "ритм живлення", en: "hylen pulse" },
    title: { uk: "РИТМ ЖИВЛЕННЯ", en: "HYLEN PULSE" },
    subTitle: {
      uk: "Кормозмішувачі-змішувачі",
      en: "Feed mixer wagons",
    },
    text: {
      uk: 'Техніка категорії "Ритм живлення" забезпечує стабільну й ефективну «внутрішню циркуляцію» господарства. Ритм живлення відповідає за харчовий баланс — злагоджено, точно й без збоїв. Це той самий механізм, що підтримує ритм життя ферми.',
      en: "Equipment in the HYLEN PULSE category ensures stable and efficient internal circulation across your operation. Feeding rhythm supports nutritional balance accurately and consistently.",
    },
    cards: [
      {
        img: "/rytm-zhyvlennya/1.webp",
        subTitle: { uk: "Кормозмішувач КСП", en: "Feed mixer KSP" },
        id: "ksp-single-auger",
      },
      {
        img: "/rytm-zhyvlennya/2.webp",
        subTitle: {
          uk: "Кормозмішувач КСП з двома шнеками",
          en: "Feed mixer KSP with two augers",
        },
        id: "ksp-double-auger",
      },
    ],
  },
  products: [
    {
      id: "ksp-single-auger",
      title: { uk: "Кормозмішувач КСП", en: "Feed mixer KSP" },
      modelCards: {
        uk: ["КСП-6", "КСП-10", "КСП-12"],
        en: ["KSP-6", "KSP-10", "KSP-12"],
      },
      isCustomDesign: true,
      video: "/rytm-zhyvlennya/1.mp4",
      videoPreview: "/rytm-zhyvlennya/1.webp",
      description: {
        about: {
          uk: "Це техніка для приготування та точного змішування кормових сумішей із різних компонентів: зеленої маси, силосу, сінажу, соломи, комбікорму та добавок.",
          en: "Equipment for preparing and precise mixing of feed mixtures from green mass, silage, haylage, straw, compound feed, and additives.",
        },
        purpose: {
          uk: "Ідеальний вибір для молочних, великотоварних і свинарських ферм, а також вівчарства.",
          en: "Ideal for dairy, large-scale livestock, pig, and sheep farms.",
        },
        features: {
          uk: "Зважування здійснюється з точністю до 1%, що гарантує ідеальний раціон для ваших тварин.",
          en: "Weighing accuracy up to 1% ensures the right nutritional balance for livestock.",
        },
        advantages: {
          uk: [
            "Рівномірна роздача корму підвищує продуктивність ферми і зменшує втрати.",
            "Конструкція кормозмішувача - міцна рама і бункер від 6 до 12 м³, розраховані на суворі умови роботи.",
            "Використовуємо якісні європейські та українські деталі для надійності та конкурентної ціни.",
          ],
          en: [
            "Uniform feed distribution boosts productivity and reduces losses",
            "Sturdy frame and hopper from 6 to 12 m3 for demanding operation",
            "High-quality European and Ukrainian components for reliability and competitive cost",
          ],
        },
      },
      images: [
        "/rytm-zhyvlennya/ksp1/2.webp",
        "/rytm-zhyvlennya/ksp1/1.webp",
        "/rytm-zhyvlennya/ksp1/3.webp",
      ],
      specs: {
        models: {
          uk: ["КСП-6", "КСП-10", "КСП-12"],
          en: ["KSP-6", "KSP-10", "KSP-12"],
        },
        rows: [
          {
            label: { uk: "Об'єм бункера, м³", en: "Hopper volume, m3" },
            values: ["6", "10", "12"],
          },
          {
            label: {
              uk: "Габаритні розміри, мм (довжина/висота/висота вивантажувального отвору/колія/ширина)",
              en: "Overall dimensions, mm (length/height/discharge opening height/track width/width)",
            },
            values: [
              "3950\n2350\n780\n 1550\n2200",
              "4240\n2800\n780\n 1550\n2200",
              "4400\n2800\n780\n1550\n2400",
            ],
          },
          {
            label: {
              uk: "Маса завантажуваного корму, не більше, кг",
              en: "Loaded feed mass, max, kg",
            },
            values: ["2000", "3300", "4000"],
          },
          {
            label: {
              uk: "Кількість ножів, шт",
              en: "Number of knives, pcs",
            },
            values: ["5", "5", "5"],
          },
          {
            label: {
              uk: "Число обертів ВВП, об/хв",
              en: "PTO speed, rpm",
            },
            values: ["540", "540", "540"],
          },
          {
            label: {
              uk: "Частота обертання шнека, об/хв",
              en: "Auger rotation speed, rpm",
            },
            values: ["25", "25", "25"],
          },
          {
            label: {
              uk: "Агрегатується з трактором тягового класу, кН",
              en: "Aggregates with tractor traction class, kN",
            },
            values: ["1,4", "1,4", "1,4"],
          },
          {
            label: {
              uk: "Обслуговуючий персонал, чол.",
              en: "Operating personnel, persons",
            },
            values: ["1", "1", "1"],
          },
        ],
      },
    },
    {
      id: "ksp-double-auger",
      title: {
        uk: "Кормозмішувач КСП з двома шнеками",
        en: "Feed mixer KSP with two augers",
      },
      modelCards: {
        uk: ["КСП-16", "КСП-18", "КСП-20", "КСП-24"],
        en: ["KSP-16", "KSP-18", "KSP-20", "KSP-24"],
      },
      isCustomDesign: true,
      video: "/rytm-zhyvlennya/2.mp4",
      videoPreview: "/rytm-zhyvlennya/2.webp",
      description: {
        about: {
          uk: "Це надійна техніка для приготування і роздачі кормових сумішей з різних компонентів: зеленої маси, силосу, сінажу, сіна, соломи, комбікорму, брикетів та добавок.",
          en: "Reliable equipment for preparing and distributing feed mixtures from green mass, silage, haylage, hay, straw, compound feed, briquettes, and additives.",
        },
        purpose: {
          uk: "Ідеальний вибір для молочних, великотоварних, вівчарських та свинарських ферм.",
          en: "Ideal for dairy, large-scale, sheep, and pig farms.",
        },
        features: {
          uk: "Завдяки точному зважуванню з похибкою до 1% та електронним системам, кормозмішувач ідеально подрібнює і змішує всі інгредієнти, забезпечуючи рівномірну роздачу корму тваринам.",
          en: "Precise weighing (up to 1% error) and electronic systems ensure effective grinding, mixing, and uniform feed distribution.",
        },
        advantages: {
          uk: [
            "Міцна конструкція з посиленою рамою і бункером об'ємом від 16 до 24 м³, оснащена двома шнеками, розрахована на важкі умови роботи на фермах.",
            "Використання якісних європейських та українських комплектуючих гарантує високу надійність і доступну ціну.",
          ],
          en: [
            "Reinforced frame with 16-24 m3 hopper and dual augers for heavy-duty work",
            "Quality European and Ukrainian components ensure reliability and affordable cost",
          ],
        },
      },
      images: [
        "/rytm-zhyvlennya/ksp2/2.webp",
        "/rytm-zhyvlennya/ksp2/3.webp",
        "/rytm-zhyvlennya/ksp2/1.webp",
      ],
      specs: {
        models: {
          uk: ["КСП-16", "КСП-18", "КСП-20", "КСП-24"],
          en: ["KSP-16", "KSP-18", "KSP-20", "KSP-24"],
        },
        rows: [
          {
            label: { uk: "Об'єм бункера, м³", en: "Hopper volume, m3" },
            values: ["16", "18", "20", "24"],
          },
          {
            label: { uk: "Довжина, мм", en: "Length, mm" },
            values: ["6450", "6600", "6700", "6700"],
          },
          {
            label: { uk: "Висота, мм", en: "Height, mm" },
            values: ["2700", "2800", "2800", "3000"],
          },
          {
            label: {
              uk: "Висота вивантажувального отвору, мм",
              en: "Discharge opening height, mm",
            },
            values: ["780", "780", "780", "780"],
          },
          {
            label: { uk: "Колія, мм", en: "Track width, mm" },
            values: ["2000", "2000", "2000", "2000"],
          },
          {
            label: { uk: "Ширина, мм", en: "Width, mm" },
            values: ["2200", "2200", "2400", "2400"],
          },
          {
            label: {
              uk: "Маса завантажуваного корму, кг, не більше",
              en: "Loaded feed mass, max, kg",
            },
            values: ["5300", "6000", "6600", "8000"],
          },
          {
            label: {
              uk: "Кількість шнеків, шт",
              en: "Number of augers, pcs",
            },
            values: ["2", "2", "2", "2"],
          },
          {
            label: {
              uk: "Кількість ножів, шт",
              en: "Number of knives, pcs",
            },
            values: ["2x5", "2x5", "2x5", "2x5"],
          },
          {
            label: {
              uk: "Число обертів ВВП, об/хв",
              en: "PTO speed, rpm",
            },
            values: ["540", "540", "540", "540"],
          },
          {
            label: {
              uk: "Частота обертання шнека, об/хв",
              en: "Auger rotation speed, rpm",
            },
            values: ["25", "25", "25", "25"],
          },
          {
            label: {
              uk: "Агрегатується з трактором тягового класу, кН",
              en: "Aggregates with tractor traction class, kN",
            },
            values: ["2", "2", "3", "3"],
          },
          {
            label: {
              uk: "Обслуговуючий персонал, чол.",
              en: "Operating personnel, persons",
            },
            values: ["1", "1", "1", "1"],
          },
        ],
      },
    },
  ],
};

