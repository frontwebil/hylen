"use client";

import Image from "next/image";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { useLanguage } from "@/Store/useLanguage";
import "./heroCardsExact.css";
import "./heroCards.css";

function ensureWebp(path: string): string {
  return path.endsWith(".webp") ? path : `${path}.webp`;
}

function norm(v: string): string {
  return v
    .trim()
    .toLowerCase()
    .replace(/[\s\-_./]+/g, "");
}

export function SearchResultsClient({
  itemsByLang,
  query,
}: {
  itemsByLang: { uk: Array<ProductItem & { searchText?: string }>; en: Array<ProductItem & { searchText?: string }> };
  query: string;
}) {
  const { language } = useLanguage();
  const loc = language === "en" ? "en" : "uk";
  const q = norm(query);

  const items = itemsByLang[loc].filter((item) => {
    if (!q) return true;
    const hay = item.searchText ? norm(item.searchText) : norm(`${item.title} ${item.subTitle} ${item.link}`);
    return hay.includes(q);
  });

  const heading =
    language === "en"
      ? q
        ? `Search results for “${query}”`
        : "All items"
      : q
        ? `Результати пошуку за “${query}”`
        : "Всі позиції";

  return (
    <section className="search-results-hero">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <h2 className="search-results-hero-heading">{heading}</h2>
        <div className="search-results-hero-grid">
          {items.map((item) => (
            <a className="product-hero-content-card" key={item.link} href={item.link}>
              <div className="product-hero-content-card-media">
                <Image
                  src={ensureWebp(item.img)}
                  alt=""
                  width={1000}
                  height={1000}
                  className="product-hero-content-card-image"
                />
              </div>

              <div className="product-hero-content-card-underImg">
                <p className="product-hero-content-card-underImg-subTitle">
                  <span className="search-results-hero-titleClamp">{item.title}</span>
                </p>
                <div className="product-hero-content-card-underImg-button">
                  <Image
                    src={"/Header/arrow-white.svg"}
                    width={22}
                    height={22}
                    alt="=>"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
