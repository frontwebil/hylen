"use client";

import "./style.css";
import { useLanguage } from "@/Store/useLanguage";

type ProductSpecRow = {
  label: string;
  values: string[];
};

type ProductSpecs = {
  models: string[];
  rows: ProductSpecRow[];
};

export function TechnicalSpecs({ specs }: { specs: ProductSpecs }) {
  const { language } = useLanguage();
  const labelMap: Record<string, string> = {
    "Довжина, мм": "Length, mm",
    "Ширина, мм": "Width, mm",
    "Висота, мм": "Height, mm",
    "Габарити кузова, мм": "Body dimensions, mm",
    "Ширина колії, мм": "Track width, mm",
    "Максимально допустима вага вантажу, кг":
      "Maximum permissible cargo weight, kg",
    "Вага, кг": "Weight, kg",
    "Маса, кг": "Mass, kg",
    "Максимальне навантаження, кг": "Maximum load, kg",
    "Максимально допустима вага з вантажем, кг":
      "Maximum permissible gross weight, kg",
    "Об'єм бункера, м³": "Hopper volume, m3",
    "Габаритні розміри, мм (довжина/висота/висота вивантажувального отвору/колія/ширина)":
      "Overall dimensions, mm (length/height/discharge opening height/track width/width)",
    "Маса завантажуваного корму, не більше, кг": "Loaded feed mass, max, kg",
    "Кількість ножів, шт": "Number of knives, pcs",
    "Число обертів ВВП, об/хв": "PTO speed, rpm",
    "Частота обертання шнека, об/хв": "Auger rotation speed, rpm",
    "Агрегатується з трактором тягового класу, кН":
      "Aggregates with tractor traction class, kN",
    "Обслуговуючий персонал, чол.": "Operating personnel, persons",
    "Кількість шнеків, шт": "Number of augers, pcs",
    "Габаритні розміри, мм (довжина/ширина/висота), не більше":
      "Overall dimensions, mm (length/width/height), max",
    "Кількість осей, шт.": "Number of axles, pcs",
    "Маса, не більше, кг": "Mass, max, kg",
    "Максимально допустиме навантаження, не більше, кг":
      "Maximum permissible load, max, kg",
    "Максимальна вага з вантажем, кг": "Maximum gross weight, kg",
    "Кількість коліс, шт.": "Number of wheels, pcs",
    "Розмір шин": "Tire size",
  };
  const copy = {
    title:
      language === "en"
        ? "Technical Specifications"
        : "Технічні характеристики",
    tableAria:
      language === "en"
        ? "Technical specifications"
        : "Технічні характеристики",
    model: language === "en" ? "Model" : "Модель",
  };

  const phraseMap: Record<string, string> = {
    "Контейнеровоз (для 20-футового контейнера)":
      "Container carrier (for one 20-foot container)",
    "Контейнеровоз (для 40-футового або двох 20-футових контейнерів)":
      "Container carrier (for one 40-foot or two 20-foot containers)",
    "Пневматична (EBS - опційно)": "Pneumatic (EBS - optional)",
    "Пневматична, з EBS": "Pneumatic, with EBS",
    "Пневматична, двоконтурна": "Pneumatic, dual-circuit",
    '2" шкворень': "2″ kingpin",
    Овал: "Oval",
    Платформа: "Platform",
    Ресорна: "Leaf spring",
    Односкатна: "Single",
    "Харчова нержавіюча сталь (AISI 321 або аналог)":
      "Food-grade stainless steel (AISI 321 or equivalent)",
    "Технічна нержавіюча сталь (AISI 430 або аналог)":
      "Technical stainless steel (AISI 430 or equivalent)",
    "Харчова нержавіюча сталь (AISI 321/304), утеплення пінополіуретаном, зовнішня обшивка зі сталі S235":
      "Food-grade stainless steel (AISI 321/304), polyurethane foam insulation, outer cladding from S235 steel",
    "Електрозварна, із високоміцної сталі 09Г2С або S355; в основі рами зварена балка двотаврової форми":
      "Electric-welded, made of high-strength 09G2S or S355 steel; I-beam welded in the frame base",
    "Схема постійного струму 24В від бортової мережі; світлосигнальне обладнання, задні ліхтарі, ліхтар номерного знаку, розетки, вилки та електроз'єднувачі в захисній оболонці":
      "24V DC circuit from onboard power; lighting equipment, rear lamps, license plate lamp, sockets, plugs, and protected electrical connectors",
    "Передні диски діаметром 500мм для прорізання ґрунту або рослинних залишків з можливістю регулювання":
      "Front discs, 500 mm diameter, for cutting soil or crop residues with adjustment option",
    "Привід від трактора через карданний вал та редукторний механізм з ланцюговою передачею на фрезу":
      "Drive from tractor via PTO shaft and gearbox with chain transmission to the milling unit",
    "Два опорних колеса з шиною бренду BKT «MagLift 4.00-8» та піввісю компанії FAD та два прикатуючих плівку колеса з шиною Deli Tire S 15.00-6 R6":
      "Two support wheels with BKT MagLift 4.00-8 tires and FAD half-axle, plus two film-pressing wheels with Deli Tire S 15.00-6 R6 tires",
    "Механізм укладення плівки з прикатуючими колесами та нагортаючими лапами":
      "Film laying mechanism with pressing wheels and covering shares",
    "Можливість встановлення стрічки крапельного поливу з регулюваннями":
      "Option to install drip irrigation tape with adjustments",
    "Листовий метал товщиною не менше 5 мм зі сталі 09Г2С або S355":
      "Sheet metal, thickness not less than 5 mm, made of 09G2S or S355 steel",
    " по ": " x ",
  };

  const valueMap: Record<string, string> = {
    "До ": "Up to ",
    "не менше": "not less than",
    "не більше": "not more than",
    Пневматична: "Pneumatic",
    пневматична: "pneumatic",
    Ресорна: "Leaf spring",
    ресорна: "leaf spring",
    Односкатна: "Single",
    Зварна: "Welded",
    зварна: "welded",
    стелева: "steel",
    "зі сталі": "from steel",
    "Харчова нержавіюча сталь": "Food-grade stainless steel",
    "Технічна нержавіюча сталь": "Technical stainless steel",
    "Автомобіль ЗіЛ-131": "ZIL-131 vehicle",
    навісний: "mounted",
    Трьохточкове: "Three-point",
    "Овальна, горизонтальна": "Oval, horizontal",
    "Герметична, термоізольована": "Sealed, thermally insulated",
    опційно: "optional",
    запасне: "spare",
    "09Г2С": "09G2S",
    " або ": " or ",
    " мм": " mm",
    " м": " m",
    "24В": "24V",
    кг: "kg",
    мм: "mm",
    кН: "kN",
    "м³": "m3",
    шт: "pcs",
    "об/хв": "rpm",
    л: "L",
    "л/хв": "L/min",
    хв: "min",
    "км/год": "km/h",
    осіб: "persons",
    чол: "persons",
    вісь: "axle",
    передня: "front",
    задня: "rear",
    вивантажувального: "discharge",
    отвору: "opening",
    колія: "track",
    ширина: "width",
    висота: "height",
    довжина: "length",
    "без вантажу": "without load",
  };

  const modelMap: Record<string, string> = {
    "НПС-1": "NPS-1",
    "НПС-2": "NPS-2",
    "НПС-3": "NPS-3",
    "НПС-5": "NPS-5",
    "П-6": "P-6",
    "П-10": "P-10",
    "П-13": "P-13",
    "КСП-6": "KSP-6",
    "КСП-10": "KSP-10",
    "КСП-12": "KSP-12",
    "КСП-16": "KSP-16",
    "КСП-18": "KSP-18",
    "КСП-20": "KSP-20",
    "КСП-24": "KSP-24",
    "ТПК-38": "TPK-38",
    ПЦ: "PC",
    "ПЦ-8,0": "PC-8.0",
    "ЦВ-2,0": "CV-2.0",
    "АПЗ-6,5": "APZ-6.5",
    "АПЗ-8,0": "APZ-8.0",
    "НПВ 3007.5": "NPV 3007.5",
    НПТК: "NPTK",
    "ПТК-10": "PTK-10",
    "Причіп-цистерна ПЦ-8,0": "Tank trailer PC-8.0",
  };

  const formatModel = (model: string) => {
    if (language !== "en") return model;
    return modelMap[model] ?? model;
  };

  const formatValue = (value: string) => {
    if (language !== "en") return value;
    let formatted = value;
    Object.entries(phraseMap).forEach(([from, to]) => {
      formatted = formatted.split(from).join(to);
    });
    Object.entries(valueMap).forEach(([from, to]) => {
      formatted = formatted.split(from).join(to);
    });
    formatted = formatted.replaceAll("х", "x");
    return formatted;
  };

  return (
    <section className="technical-specs">
      <div className="container">
        <h2>{copy.title}</h2>
        <div className="technical-specs-table-wrap" aria-label={copy.tableAria}>
          <table className="technical-specs-table">
            <thead>
              <tr>
                <th scope="col" className="col-label">
                  {copy.model}
                </th>
                {specs.models.map((model) => (
                  <th key={model} scope="col">
                    {formatModel(model)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="row-label">
                    {language === "en"
                      ? (labelMap[row.label] ?? row.label)
                      : row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i}>{formatValue(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}