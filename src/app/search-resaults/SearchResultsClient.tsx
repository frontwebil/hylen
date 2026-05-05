"use client";

import Image from "next/image";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { useLanguage } from "@/Store/useLanguage";
import "./heroCardsExact.css";
import "./heroCards.css";

function ensureWebp(path: string): string {
  return path.endsWith(".webp") ? path : `${path}.webp`;
}

export function SearchResultsClient({
  itemsByLang,
}: {
  itemsByLang: { uk: ProductItem[]; en: ProductItem[] };
}) {
  const { language } = useLanguage();
  const loc = language === "en" ? "en" : "uk";

  return (
    <section className="search-results-hero">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="search-results-hero-grid">
          {itemsByLang[loc].map((item) => (
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
                <p className="product-hero-content-card-underImg-subTitle">{item.title}</p>
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
