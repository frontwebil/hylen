import type { ProductPageData } from "@/Types/productData";

export const pageDataFallback: ProductPageData = {
  hero: {
    breadcrums: { uk: "тяговий вузол", en: "hylen anchor" },
    title: { uk: "ТЯГОВИЙ ВУЗОЛ", en: "HYLEN ANCHOR" },
    subTitle: {
      uk: "Причіпи-Напівпричіпи",
      en: "Trailers and semi-trailers",
    },
    text: {
      uk: "Техніка категорії «Тяговий вузол» - опора стабільної та безперебійної роботи. Міцний, витривалий причіп-напівпричіп, який тримає будь-яке навантаження й працює без збоїв у найскладніших умовах.",
      en: "Equipment in the HYLEN ANCHOR category is the foundation of stable and uninterrupted operation. Durable trailers and semi-trailers are designed to handle heavy loads in demanding conditions.",
    },
    cards: [
      {
        img: "/tyahovyy-vuzol/1.webp",
        subTitle: {
          uk: "Напівпричіп платформа НПВ 3007.5",
          en: "Semitrailer platform NPV 3007.5",
        },
        id: "npv-3007-5",
      },
      {
        img: "/tyahovyy-vuzol/2.webp",
        subTitle: {
          uk: "Напівпричіп транспортування контейнерів НПТК",
          en: "Container transport semitrailer NPTK",
        },
        id: "nptk",
      },
      {
        img: "/tyahovyy-vuzol/3.webp",
        subTitle: {
          uk: "Причіп транспортування контейнерів ПТК-10",
          en: "Container transport trailer PTK-10",
        },
        id: "ptk-10",
      },
      {
        img: "/tyahovyy-vuzol/4.webp",
        subTitle: {
          uk: "Причіп спеціальний ПС-3,5",
          en: "Special purpose trailer PS-3.5",
        },
        id: "ps-3-5",
      },
    ],
  },
  products: [
    {
      id: "npv-3007-5",
      title: {
        uk: "Напівпричіп платформа НПВ 3007.5",
        en: "Semitrailer platform NPV 3007.5",
      },
      modelCards: {
        uk: ["НПВ 3007.5"],
        en: ["NPV 3007.5"],
      },
      isCustomDesign: false,
      video: "/tyahovyy-vuzol/1.mp4",
      videoPreview: "/tyahovyy-vuzol/1.webp",
      description: {
        about: {
          uk: "Універсальне і надійне рішення для перевезення важких та негабаритних вантажів.",
          en: "A universal and reliable solution for transporting heavy and oversized cargo.",
        },
        purpose: {
          uk: "Ідеально підходить для транспортування будівельної, сільськогосподарської та автомобільної техніки, а також великих конструкцій і масивних об'єктів.",
          en: "Ideal for transportation of construction, agricultural, and automotive machinery, as well as large structures and heavy objects.",
        },
        features: {
          uk: "Міцна конструкція НПВ 3007.5 робить його незамінним для складних логістичних завдань. Це надійний партнер для підприємств, що працюють з великими вантажами.",
          en: "The robust NPV 3007.5 design makes it indispensable for demanding logistics tasks.",
        },
        advantages: {
          uk: [
            "Універсальність: підходить для різних типів вантажів, включно з негабаритними.",
            "Міцність і довговічність: виготовлений з якісних матеріалів, витримує навантаження до 30 тонн.",
            "Зручність експлуатації: полегшує завантаження та розвантаження, економить час і сили.",
            "Продукція входить до програми «Зроблено в Україні» з можливістю отримати компенсацію 25% вартості через Міністерство економіки.",
          ],
          en: [
            "Versatile for multiple cargo types, including oversized loads",
            "Durable construction, load capacity up to 30 tons",
            "Simplifies loading and unloading",
          ],
        },
      },
      images: [
        "/tyahovyy-vuzol/np30/1.webp",
        "/tyahovyy-vuzol/np30/3.webp",
        "/tyahovyy-vuzol/np30/2.webp",
      ],
      specs: {
        models: {
          uk: ["НПВ 3007.5"],
          en: ["NPV 3007.5"],
        },
        rows: [
          {
            label: {
              uk: "Габаритні розміри, мм (довжина/ширина (без габаритних сигналів)/висота/кліренс, не менше)",
              en: "Overall dimensions, mm (length/width without marker lights/height/min clearance)",
            },
            values: ["12 610 ± 25\n2 550 ± 10\n3 250 ± 80\n130"],
          },
          {
            label: { uk: "Кількість осей, шт.", en: "Number of axles, pcs" },
            values: ["3"],
          },
          {
            label: { uk: "Кузов", en: "Body type" },
            values: [{ uk: "Платформа", en: "Platform" }],
          },
          {
            label: {
              uk: "Споряджена маса, не більше, кг",
              en: "Curb weight, max, kg",
            },
            values: ["9 000"],
          },
          {
            label: {
              uk: "Повна маса, не більше, кг",
              en: "Gross vehicle weight, max, kg",
            },
            values: ["39 000"],
          },
          {
            label: {
              uk: "Кількість коліс, шт.",
              en: "Number of wheels, pcs",
            },
            values: [{ uk: "12 + 1 запасне", en: "12 + 1 spare" }],
          },
          {
            label: {
              uk: "Максимальне навантаження на вісь, кг",
              en: "Maximum axle load, kg",
            },
            values: [{ uk: "До 9 000", en: "Up to 9 000" }],
          },
          {
            label: { uk: "Розмір дисків коліс", en: "Wheel rim size" },
            values: ["17,5x6,75"],
          },
          {
            label: { uk: "Розмір шин", en: "Tire size" },
            values: ["235/75 R17,5"],
          },
          {
            label: { uk: "Гальмівна система", en: "Brake system" },
            values: [{ uk: "Пневматична, з EBS", en: "Pneumatic, with EBS" }],
          },
          {
            label: {
              uk: "Максимальна швидкість руху, км/год",
              en: "Maximum speed, km/h",
            },
            values: ["105"],
          },
          {
            label: { uk: "Підвіска", en: "Suspension" },
            values: [{ uk: "Пневматична", en: "Pneumatic" }],
          },
          {
            label: { uk: "Електромережа", en: "Electrical system" },
            values: ["24V"],
          },
        ],
      },
    },
    {
      id: "nptk",
      title: {
        uk: "Напівпричіп транспортування контейнерів НПТК",
        en: "Container transport semitrailer NPTK",
      },
      modelCards: {
        uk: ["НПТК"],
        en: ["NPTK"],
      },
      isCustomDesign: false,
      video: "/tyahovyy-vuzol/2.mp4",
      videoPreview: "/tyahovyy-vuzol/2.webp",
      description: {
        about: {
          uk: "НПТК - надійне рішення для безпечного та швидкого перевезення вантажних контейнерів різних типів і розмірів.",
          en: "Reliable solution for safe and fast transportation of cargo containers.",
        },
        purpose: {
          uk: "Оптимальний вибір для логістичних компаній, будівництва та промислових підприємств, що потребують ефективного транспортування контейнерів. Ідеальний для міжміських і міжнародних перевезень.",
          en: "Best for logistics, construction, and industrial companies requiring efficient container transport, including intercity and international routes.",
        },
        features: {
          uk: "Легка, але міцна конструкція збільшує вантажопідйомність і знижує вагу транспортного засобу. Є системи гальмування та освітлення для безпеки перевезень.",
          en: "Lightweight yet durable design increases payload and includes braking and lighting systems for safe transport.",
        },
        advantages: {
          uk: [
            "Висока вантажопідйомність: підходить для контейнерів 20, 40, 45 футів, а також негабаритних вантажів.",
            "Надійна фіксація: спеціальні механізми надійно закріплюють контейнер, мінімізуючи ризик зсуву під час руху.",
            "Міцність і довговічність: виготовлений з якісних матеріалів, витримує інтенсивні навантаження.",
            "Продукція входить до програми «Зроблено в Україні» з можливістю отримати компенсацію 25% вартості через Міністерство економіки.",
          ],
          en: [
            "Supports 20, 40, and 45-foot containers, including oversized cargo",
            "Reliable locking mechanisms reduce shift risk in transit",
            "High-strength construction for intensive operation",
          ],
        },
      },
      images: [
        "/tyahovyy-vuzol/nptk/3.webp",
        "/tyahovyy-vuzol/nptk/1.webp",
        "/tyahovyy-vuzol/nptk/2.webp",
      ],
      specs: {
        models: {
          uk: ["НПТК"],
          en: ["NPTK"],
        },
        rows: [
          {
            label: {
              uk: "Габаритні розміри, мм (довжина/ширина (без габаритних сигналів)/висота/кліренс, не менше)",
              en: "Overall dimensions, mm (length/width without marker lights/height/min clearance)",
            },
            values: ["12 280 ± 25\n2450 ± 10\n1450 ± 80\n250"],
          },
          {
            label: { uk: "Кількість осей, шт.", en: "Number of axles, pcs" },
            values: ["3"],
          },
          {
            label: { uk: "Кузов", en: "Body type" },
            values: [
              {
                uk: "Контейнеровоз (для 40-футового або двох 20-футових контейнерів)",
                en: "Container carrier (for one 40-foot or two 20-foot containers)",
              },
            ],
          },
          {
            label: {
              uk: "Споряджена маса, не більше, кг",
              en: "Curb weight, max, kg",
            },
            values: ["5500"],
          },
          {
            label: {
              uk: "Повна маса, не більше, кг",
              en: "Gross vehicle weight, max, kg",
            },
            values: ["35 000"],
          },
          {
            label: {
              uk: "Максимальне навантаження на вісь, кг",
              en: "Maximum axle load, kg",
            },
            values: [{ uk: "До 9000", en: "Up to 9000" }],
          },
          {
            label: {
              uk: "Кількість коліс, шт.",
              en: "Number of wheels, pcs",
            },
            values: ["6 + 1"],
          },
          {
            label: { uk: "Розмір дисків коліс", en: "Wheel rim size" },
            values: ["11,75 x 22,5"],
          },
          {
            label: { uk: "Розмір шин", en: "Tire size" },
            values: ["385/65 R22,5"],
          },
          {
            label: {
              uk: "Максимальна швидкість руху, км/год",
              en: "Maximum speed, km/h",
            },
            values: ["105"],
          },
          {
            label: { uk: "Гальмівна система", en: "Brake system" },
            values: [{ uk: "Пневматична, з EBS", en: "Pneumatic, with EBS" }],
          },
          {
            label: { uk: "Підвіска", en: "Suspension" },
            values: [{ uk: "Пневматична", en: "Pneumatic" }],
          },
          {
            label: { uk: "Зчіпний шкворень", en: "Kingpin" },
            values: [{ uk: '2" шкворень', en: "2″ kingpin" }],
          },
          {
            label: { uk: "Електромережа", en: "Electrical system" },
            values: ["24V"],
          },
        ],
      },
    },
    {
      id: "ptk-10",
      title: {
        uk: "Причіп транспортування контейнерів ПТК-10",
        en: "Container transport trailer PTK-10",
      },
      modelCards: {
        uk: ["ПТК-10"],
        en: ["PTK-10"],
      },
      isCustomDesign: false,
      video: "/tyahovyy-vuzol/3.mp4",
      videoPreview: "/tyahovyy-vuzol/3.webp",
      description: {
        about: {
          uk: "Надійний тягово-зчіпний причіп 2+0 (2+2) типу вантажних контейнерів для сільського господарства, будівельних робіт та інших видів техніки.",
          en: "A reliable trailer for transporting 20-foot cargo containers.",
        },
        purpose: {
          uk: "Причіп виготовлено для транспортування вантажів різного об'єму, негабаритних одиниць та будівельної техніки.",
          en: "Ideal for logistics companies transporting containers over any distance.",
        },
        features: {
          uk: "Платформа ПТК-10 обладнана системою фіксації, що унеможливлює зсув контейнера під час руху. Має високу вантажопідйомність і ергономічну конструкцію.",
          en: "PTK-10 features a secure fastening system and vibration-reducing setup for stable transport even on rough roads.",
        },
        advantages: {
          uk: [
            "Сумісність із контейнерами типу євростандарт.",
            "Міцна конструкція.",
            "Надійна система кріплення контейнера та подовжений дишель.",
            "Легка експлуатація причепа.",
            "Висока прохідність причепа (кліренс не менше 300 мм).",
            "Електрообладнання 24/80V.",
          ],
          en: [
            "Compatible with standard truck tractors",
            "Fast and reliable container fixation",
            "Durable design for heavy-duty road conditions",
          ],
        },
      },
      images: [
        "/tyahovyy-vuzol/ptk10/3.webp",
        "/tyahovyy-vuzol/ptk10/1.webp",
        "/tyahovyy-vuzol/ptk10/2.webp",
      ],
      specs: {
        models: {
          uk: ["ПТК-10"],
          en: ["PTK-10"],
        },
        rows: [
          {
            label: {
              uk: "Габаритні розміри, мм (довжина, не більше / ширина / висота (у спорядженому стані))",
              en: "Overall dimensions, mm (length max / width / height curb)",
            },
            values: ["17765 / 2455 / 1340"],
          },
          {
            label: { uk: "Кузов", en: "Body type" },
            values: [
              {
                uk: "Контейнеровоз (для 20-футового контейнера)",
                en: "Container carrier (for one 20-foot container)",
              },
            ],
          },
          {
            label: {
              uk: "Максимальна довжина дишла причепа, мм",
              en: "Maximum drawbar length, mm",
            },
            values: ["1990"],
          },
          {
            label: {
              uk: "Споряджена маса, не більше, кг",
              en: "Curb weight, max, kg",
            },
            values: ["3200"],
          },
          {
            label: {
              uk: "Повна маса, не більше, кг",
              en: "Gross vehicle weight, max, kg",
            },
            values: ["18000"],
          },
          {
            label: { uk: "Розмір коліс", en: "Wheel size" },
            values: ["385/65 R22.5"],
          },
          {
            label: {
              uk: "Максимальна швидкість руху, км/год",
              en: "Maximum speed, km/h",
            },
            values: ["80"],
          },
          {
            label: { uk: "Гальмівна система", en: "Brake system" },
            values: [
              {
                uk: "Пневматична (EBS - опційно)",
                en: "Pneumatic (EBS - optional)",
              },
            ],
          },
          {
            label: { uk: "Підвіска", en: "Suspension" },
            values: [{ uk: "Ресорна", en: "Leaf spring" }],
          },
          {
            label: { uk: "Причіпна петля", en: "Towing eye" },
            values: ["90/D40"],
          },
          {
            label: { uk: "Електромережа", en: "Electrical system" },
            values: ["24V"],
          },
        ],
      },
    },
    {
      id: "ps-3-5",
      title: {
        uk: "Причіп спеціальний ПС-3,5",
        en: "Special purpose trailer PS-3.5",
      },
      modelCards: {
        uk: ["Причіп спеціальний ПС-3,5"],
        en: ["PS-3.5"],
      },
      isCustomDesign: false,
      video: "/tyahovyy-vuzol/4.mp4",
      videoPreview: "/tyahovyy-vuzol/4.webp",
      description: {
        about: {
          uk: "Причіп спеціальний ПС-3,5 - це спеціалізований транспортний засіб, призначений для перевезення бензинової або дизельної техніки й обладнання.",
          en: "Specialized trailer designed for safe and convenient transportation of cargo and equipment.",
        },
        purpose: {
          uk: "Служить для транспортування евакуатора різного знаряддя і іншої спеціальної техніки в умовах, наближених до цивільних або промислових потреб.",
          en: "Used for transporting loads of different sizes and weights on public roads in field and industrial conditions.",
        },
        features: {
          uk: "Повна маса вантажопідйомності 3500 кг. Максимальне навантаження 2800 кг.",
          en: "Gross vehicle weight up to 3500 kg.",
        },
        advantages: {
          uk: [
            "Мала маса і висока вантажопідйомність ПС.",
            "Осі спеціально Swiss Axle 80.",
            "Ресорна підвіска.",
            "Сертифікат форми виробництва UA.MD.076.",
          ],
          en: [
            "High-strength steel frame (09G2S)",
            "Knott-Autoflex axles and overrun brake",
            "Durable European coating by MALCHEM",
          ],
        },
      },
      images: [
        "/tyahovyy-vuzol/ps3/3.webp",
        "/tyahovyy-vuzol/ps3/1.webp",
        "/tyahovyy-vuzol/ps3/2.webp",
      ],
      specs: {
        models: {
          uk: ["Причіп спеціальний ПС-3,5"],
          en: ["PS-3.5"],
        },
        rows: [
          {
            label: { uk: "Довжина, мм", en: "Length, mm" },
            values: ["5950"],
          },
          {
            label: { uk: "Ширина, мм", en: "Width, mm" },
            values: ["2130"],
          },
          {
            label: {
              uk: "Висота (у спорядженому стані), мм",
              en: "Height (curb), mm",
            },
            values: ["1180"],
          },
          {
            label: { uk: "Ширина колії, мм", en: "Track width, mm" },
            values: ["1180"],
          },
          {
            label: { uk: "Максимальна маса, кг", en: "Maximum mass, kg" },
            values: ["6800"],
          },
          {
            label: {
              uk: "Максимальне навантаження, кг",
              en: "Maximum load, kg",
            },
            values: ["2800"],
          },
          {
            label: {
              uk: "Максимальна вага з вантажем, не більше, кг",
              en: "Maximum gross weight, kg",
            },
            values: ["3500"],
          },
        ],
      },
    },
  ],
};
