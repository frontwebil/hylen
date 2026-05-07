export const SITE_SETTINGS_SLUG = "__site_settings__";

type LocaleText = { uk: string; en: string };

export type SiteSettings = {
  footer: {
    helpTitle: LocaleText;
    links: {
      payment: LocaleText;
      delivery: LocaleText;
      service: LocaleText;
      returns: LocaleText;
    };
    phone: string;
    socials: {
      facebook: string;
      instagram: string;
    };
  };
  pages: {
    payment: { title: LocaleText; text: LocaleText };
    delivery: { title: LocaleText; text: LocaleText };
    service: { title: LocaleText; text: LocaleText };
    returns: { title: LocaleText; text: LocaleText };
  };
};

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  footer: {
    helpTitle: { uk: "Допомога", en: "Help" },
    links: {
      payment: { uk: "Оплата", en: "Payment" },
      delivery: { uk: "Доставка", en: "Delivery" },
      service: { uk: "Сервісне обслуговування", en: "Service and Maintenance" },
      returns: { uk: "Повернення та обмін", en: "Returns and Exchanges" },
    },
    phone: "+38 099 840 98 75",
    socials: {
      facebook: "",
      instagram: "",
    },
  },
  pages: {
    payment: {
      title: { uk: "Оплата", en: "Payment" },
      text: {
        uk:
          "Готівковий\nОплата товару в касі заводу.\n\nБезготівковий\nОплата товару згідно рахунку-фактури.\n\nПісляплата\nОплата за товар при отриманні у поштовому відділенні або кур'єру у випадку доставки «До дверей».\nДоставка сплачується клієнтом окремо згідно тарифів служби логістики.",
        en:
          "Cash\nPayment for goods at the factory cash desk.\n\nBank transfer\nPayment for goods according to the invoice.\n\nCash on delivery\nPayment for goods upon receipt at the post office or to the courier in case of door-to-door delivery.\nShipping is paid by the customer separately according to the logistics service rates.",
      },
    },
    delivery: {
      title: { uk: "Доставка", en: "Delivery" },
      text: {
        uk:
          "Доставка товару виконується «Новою Поштою» згідно з тарифами компанії.\n\nВартість доставки оплачується покупцем окремо від вартості товару.\n\nТакож товар можна забрати самовивозом з території підприємства.",
        en:
          "Delivery is carried out by Nova Poshta according to the company's rates.\n\nShipping cost is paid by the customer separately from the cost of goods.\n\nYou can also pick up the goods yourself from the enterprise territory.",
      },
    },
    service: {
      title: { uk: "Сервісне обслуговування", en: "Service and Maintenance" },
      text: {
        uk:
          "Ми виконуємо сервісне обслуговування всіх товарів, які виготовляємо. Ви можете бути впевненими в тому, що придбана продукція завжди буде працювати стабільно та максимально ефективно.\n\nЗ питань обслуговування ви можете звертатися у відповідний відділ. Ми будемо раді вам допомогти!",
        en:
          "We provide maintenance service for all products we manufacture. You can be sure that purchased products will always operate stably and as efficiently as possible.\n\nFor service-related questions, you can contact the relevant department. We will be happy to help you!",
      },
    },
    returns: {
      title: { uk: "Повернення та обмін", en: "Returns and Exchanges" },
      text: {
        uk:
          "ГК «Брацлав» здійснює повернення і обмін товарів належної якості згідно Закону [«Про захист прав споживачів»](http://zakon2.rada.gov.ua/laws/show/1023-12).\n\nСтроки повернення і обміну\nПовернення та обмін товарів можливий протягом 14 днів після отримання товару покупцем.\n\nЗворотня доставка товарів\nЗдійснюється за домовленістю.\n\nУмови повернення для товарів належної якості\nЗакон про захист прав споживачів дає нашим покупцям право на повернення товару належної якості протягом чотирнадцяти днів у тому випадку, якщо збережено товарний вигляд виробу і упаковки. До здійснення повернення необхідно звернутися в той роздрібний магазин, де була зроблена покупка, або зв'язатися з менеджерами, відповідальними за вашим замовленням, якщо була оформлена доставка поштою або кур'єром. Контакти менеджера ви знайдете в особистому кабінеті. Претензії щодо комплектності товару приймаються тільки у разі відсутності ознак його експлуатації, а також за збереження його товарного вигляду. У разі прийняття позитивного рішення про наявність браку, наш інтернет-магазин може обміняти бракований товар на новий. Якщо брак полягав у відсутності елементів, яких не вистачає, то наш інтернет-магазин надасть необхідні елементи. На оформлення заяви про брак та прийняття рішення за законодавством може піти до 21 дня, проте ми зробимо все необхідне для його прискорення. Також просимо звернути увагу на товари, що не підлягають обміну та поверненню, якщо вони належної якості. Повний перелік цих товарів ви знайдете в Законі України «Про захист прав споживачів».\n\nВідповідно закону «Про захист прав споживачів», компанія може відмовити споживачеві в обміні та поверненні товарів належної якості, якщо вони відносяться до категорій, зазначених у чинному [«Переліку непродовольчих товарів належної якості, що не підлягають поверненню та обміну»](http://zakon2.rada.gov.ua/laws/show/172-94-%D0%BF).",
        en:
          "Bratslav Group provides return and exchange of goods of proper quality according to the Law of Ukraine [On Consumer Rights Protection](http://zakon2.rada.gov.ua/laws/show/1023-12).\n\nReturn and exchange period\nReturn and exchange of goods are possible within 14 days after the customer receives the goods.\n\nReturn shipping\nHandled by prior agreement.\n\nReturn conditions for goods of proper quality\nThe consumer protection law gives our customers the right to return goods of proper quality within fourteen days if the product and packaging appearance is preserved. To initiate a return, you should contact the retail store where the purchase was made, or reach out to the managers responsible for your order if delivery by post or courier was arranged. You can find your manager's contacts in your personal account. Claims regarding product completeness are accepted only if there are no signs of use and the original commercial appearance is preserved. If a defect is confirmed, our online store may replace the defective product with a new one. If the defect concerns missing components, our online store will provide the necessary elements. Processing a defect claim and making a decision may take up to 21 days under the law, but we will do everything necessary to speed it up. Please also note that some goods are not subject to exchange and return if they are of proper quality. The full list of such goods is available in the Law of Ukraine On Consumer Rights Protection.\n\nAccording to the Law On Consumer Rights Protection, the company may refuse exchange and return of proper-quality goods if they belong to categories listed in the current [List of non-food goods of proper quality that are not subject to return and exchange](http://zakon2.rada.gov.ua/laws/show/172-94-%D0%BF).",
      },
    },
  },
};

function text(v: unknown, fallback: string): string {
  return typeof v === "string" ? v : fallback;
}

export function normalizeSiteSettings(raw: unknown): SiteSettings {
  const r = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const footer = r.footer && typeof r.footer === "object" ? (r.footer as Record<string, unknown>) : {};
  const pages = r.pages && typeof r.pages === "object" ? (r.pages as Record<string, unknown>) : {};

  const links = footer.links && typeof footer.links === "object" ? (footer.links as Record<string, unknown>) : {};
  const socials = footer.socials && typeof footer.socials === "object" ? (footer.socials as Record<string, unknown>) : {};

  function local(obj: unknown, fallback: LocaleText): LocaleText {
    const o = obj && typeof obj === "object" ? (obj as Record<string, unknown>) : {};
    return {
      uk: text(o.uk, fallback.uk),
      en: text(o.en, fallback.en),
    };
  }

  function pageEntry(key: keyof SiteSettings["pages"]) {
    const fallback = DEFAULT_SITE_SETTINGS.pages[key];
    const p = pages[key] && typeof pages[key] === "object" ? (pages[key] as Record<string, unknown>) : {};
    return {
      title: local(p.title, fallback.title),
      text: local(p.text, fallback.text),
    };
  }

  return {
    footer: {
      helpTitle: local(footer.helpTitle, DEFAULT_SITE_SETTINGS.footer.helpTitle),
      links: {
        payment: local(links.payment, DEFAULT_SITE_SETTINGS.footer.links.payment),
        delivery: local(links.delivery, DEFAULT_SITE_SETTINGS.footer.links.delivery),
        service: local(links.service, DEFAULT_SITE_SETTINGS.footer.links.service),
        returns: local(links.returns, DEFAULT_SITE_SETTINGS.footer.links.returns),
      },
      phone: text(footer.phone, DEFAULT_SITE_SETTINGS.footer.phone),
      socials: {
        facebook: text(socials.facebook, ""),
        instagram: text(socials.instagram, ""),
      },
    },
    pages: {
      payment: pageEntry("payment"),
      delivery: pageEntry("delivery"),
      service: pageEntry("service"),
      returns: pageEntry("returns"),
    },
  };
}
