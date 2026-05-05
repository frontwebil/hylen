export type AdvantageBlock = {
  id: string;
  /** Номер для відображення у форматі «01» … «05» */
  index: string;
  title: string;
  description: string;
  /** Текст після «Це дає вам:» */
  benefit: string;
  defaultOpen?: boolean;
};

export const ADVANTAGES_BLOCKS_BY_LANG = {
  uk: [
    {
      id: "fast-production",
      index: "01",
      title: "Швидке виробництво – швидкий старт",
      description:
        "Ми скоротили цикл виробництва до 1,5–2 місяців замість стандартних 3–4.",
      benefit:
        "менше очікування – більше дій. Ви швидше виходите на маршрут, запускаєте бізнес чи повертаєтесь у поле, не втрачаючи грошей на простоях.",
    },
    {
      id: "reliable-construction",
      index: "02",
      title: "Надійна конструкція – менше клопотів",
      description:
        "Кожна деталь техніки продумана до дрібниць: підсилена рама, антикорозійне покриття, зручні системи кріплення.",
      benefit:
        "менше ремонтів, більше впевненості. Техніка витримує навантаження і не підводить у критичні моменти.",
    },
    {
      id: "high-precision",
      index: "03",
      title: "Високоточне виробництво – преміум \n у кожному міліметрі",
      description:
        "Ми використовуємо сучасне обладнання — зокрема, термопластавтомати та високоточні зварювальні системи.",
      benefit:
        "точність виготовлення, бездоганна якість з'єднань, стабільна робота без браку. Ви отримуєте якість преміум-класу за справедливу ціну.",
    },
    {
      id: "warranty",
      index: "04",
      title: "Гарантія, що працює",
      description: "Ми не зникаємо після покупки.",
      benefit:
        "зрозумілу гарантію та сервісну підтримку. Якщо щось трапиться — ми на зв'язку і готові допомогти.",
    },
    {
      id: "trust",
      index: "05",
      title: "Довіра, перевірена роками",
      description:
        "HYLEN — це вибір тих, хто знає, що таке відповідальність. Нам довіряють тисячі фахівців: від фермерів до військових.",
      benefit: "ви не ризикуєте, ви спираєтесь на досвід інших.",
      defaultOpen: true,
    },
  ] satisfies AdvantageBlock[],
  en: [
    {
      id: "fast-production",
      index: "01",
      title: "Fast production – quick start",
      description:
        "We have reduced the production cycle to 1.5–2 months instead of the standard 3–4 months.",
      benefit:
        "less waiting – more action. Start your route, run your business, or return to the field faster – without costly downtime.",
    },
    {
      id: "reliable-construction",
      index: "02",
      title: "Reliable design – less hassle",
      description:
        "Every detail is engineered with purpose: reinforced frame, anti-corrosion coating and convenient mounting systems.",
      benefit:
        "fewer repairs and more confidence. The equipment stands up to heavy loads and does not fail at critical moments.",
    },
    {
      id: "high-precision",
      index: "03",
      title: "High-precision manufacturing – premium quality in every detail",
      description:
        "We use state-of-the-art equipment, in particular, automatic injection moulding machines and high-precision welding systems.",
      benefit:
        "manufacturing accuracy, impeccable quality of joints and stable operation without defects. You get top-tier quality for a fair price.",
    },
    {
      id: "warranty",
      index: "04",
      title: "Available warranty",
      description: "After the purchase, we’re still with you.",
      benefit:
        "behind every product with a clear warranty and reliable service. Whatever happens, we’re here to help.",
    },
    {
      id: "trust",
      index: "05",
      title: "Trust proven over the years",
      description:
        "HYLEN is built for those who shoulder responsibility. From farmers to military forces, thousands of professionals put their trust in HYLEN.",
      benefit: "freedom from risks and the benefit of others’ experience.",
      defaultOpen: true,
    },
  ] satisfies AdvantageBlock[],
} as const;
