"use client";

import Image from "next/image";
import { ProductCard } from "./ProductCard/ProductCard";
import "./style.css";
import "./styleSlider.css";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/Store/useLanguage";

export type ProductItem = {
  title: string;
  subTitle: string;
  img: string;
  link: string;
};

// Keep this named export for modules like `ProductOtherTypesSlider`.
// It serves as a stable default (Ukrainian) list.
export const products: ProductItem[] = [
  {
    title: "ХРЕБЕТ СИСТЕМИ",
    subTitle: "Одноосні причепи",
    img: "/Products/1",
    link: "/hrebet-systemy",
  },
  {
    title: "РИТМ ЖИВЛЕННЯ",
    subTitle: "Кормороздавачі-змішувачі",
    img: "/Products/2",
    link: "/rytm-zhyvlennya",
  },
  {
    title: "МІСТ МІЖ ЛАНКАМИ",
    subTitle: "Перевантажувачі зерна",
    img: "/Products/3",
    link: "/mist-mij-lankamy",
  },
  {
    title: "Живильний потік",
    subTitle: "Цистерни для води та пального",
    img: "/Products/4",
    link: "/zhyvylnyy-potik",
  },
  {
    title: "ТЯГОВИЙ ВУЗОЛ",
    subTitle: "Причепи-напівпричепи",
    img: "/Products/5",
    link: "/tyahovyy-vuzol",
  },
  {
    title: "ОСНОВИ ВРОЖАЮ",
    subTitle: "Ґрунтообробна техніка",
    img: "/Products/6",
    link: "/osnovy-vrojayy",
  },
];

export function Products() {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const t = {
    uk: {
      sectionTitle: "продукти",
      items: products,
    },
    en: {
      sectionTitle: "product range",
      items: [
        {
          title: "HYLEN SPINE",
          subTitle: "Single-axle trailers",
          img: "/Products/1",
          link: "/hrebet-systemy",
        },
        {
          title: "HYLEN PULSE",
          subTitle: "Mixer feeder wagons",
          img: "/Products/2",
          link: "/rytm-zhyvlennya",
        },
        {
          title: "HYLEN BRIDGE",
          subTitle: "Grain transfer equipment",
          img: "/Products/3",
          link: "/mist-mij-lankamy",
        },
        {
          title: "HYLEN STREAM",
          subTitle: "Water & fuel tanks",
          img: "/Products/4",
          link: "/zhyvylnyy-potik",
        },
        {
          title: "HYLEN ANCHOR",
          subTitle: "Trailers & semi-trailers",
          img: "/Products/5",
          link: "/tyahovyy-vuzol",
        },
        {
          title: "HYLEN TERRA",
          subTitle: "Soil cultivation equipment",
          img: "/Products/6",
          link: "/osnovy-vrojayy",
        },
      ] satisfies ProductItem[],
    },
  } as const;

  const copy = t[language];
  const items = copy.items;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-title">
          <Image
            src={"/Products/title-icon.svg"}
            width={8}
            height={6}
            alt="icon"
          />
          <h4>{copy.sectionTitle}</h4>
        </div>

        {width && width >= 600 ? (
          <div className="products-grid">
            {items.map((el, i) => (
              <ProductCard product={el} key={i} />
            ))}
          </div>
        ) : (
          <div className="products-slider">
            <div className="products-slider-viewport" ref={emblaRef}>
              <div className="products-slider-container">
                {items.map((el, i) => (
                  <div className="products-slide" key={i}>
                    <ProductCard product={el} />
                  </div>
                ))}
              </div>
            </div>
            <div className="products-slider-controls">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`products-slider-bar ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  onClick={() => scrollTo(index)}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
