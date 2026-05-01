"use client";

import "./style.css";
import { useLanguage } from "@/Store/useLanguage";
import {
  LocalizedField,
  LocalizedListField,
  pickLocale,
  pickLocaleList,
} from "@/Types/productData";

type ProductSpecRow = {
  label: LocalizedField;
  values: LocalizedField[];
};

type ProductSpecs = {
  models: LocalizedListField;
  rows: ProductSpecRow[];
};

export function TechnicalSpecs({ specs }: { specs: ProductSpecs }) {
  const { language } = useLanguage();

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

  const models = pickLocaleList(specs.models, language);

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
                {models.map((model, i) => (
                  <th key={`${model}-${i}`} scope="col">
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.rows.map((row, idx) => {
                const labelKey =
                  typeof row.label === "string"
                    ? row.label
                    : row.label.uk || row.label.en || `row-${idx}`;
                return (
                  <tr key={labelKey}>
                    <th scope="row" className="row-label">
                      {pickLocale(row.label, language)}
                    </th>
                    {row.values.map((value, i) => (
                      <td key={i}>{pickLocale(value, language)}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
