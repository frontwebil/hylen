"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/Components/MainPage/Products/ProductCard/ProductCard";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { products as defaultProducts } from "@/Components/MainPage/Products/Products";
import "./style.css";

export type ProductOtherTypesSliderProps = {
  items?: ProductItem[];
  excludeLink?: string;
  heading?: string;
  description?: string;
};

const DEFAULT_HEADING = "Наші інші види продукції";
const DEFAULT_DESCRIPTION =
  "Ознайомтесь із лінійкою техніки HYLEN: від причепів і перевантажувачів до цистерн і ґрунтообробних агрегатів — оберіть рішення під ваше господарство.";

export function ProductOtherTypesSlider({
  items = defaultProducts,
  excludeLink,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
}: ProductOtherTypesSliderProps) {
  const slides = useMemo(() => {
    if (!excludeLink) return items;
    const filtered = items.filter((p) => p.link !== excludeLink);
    return filtered.length ? filtered : items;
  }, [items, excludeLink]);

  const preparedSlides = useMemo(() => {
    if (!slides.length) return [];

    const MIN_SLIDES_FOR_LOOP = 12;
    const repeatCount = Math.ceil(MIN_SLIDES_FOR_LOOP / slides.length);

    return Array.from({ length: repeatCount }, () => slides).flat();
  }, [slides]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi || slides.length === 0) return;

    const snapIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(snapIndex % slides.length);
  }, [emblaApi, slides.length]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, preparedSlides]);

  if (!slides.length) return null;

  return (
    <>
      <section
        className="product-other-types"
        aria-labelledby="product-other-types-heading"
      >
        <div className="container">
          <div className="product-other-types__intro">
            <h2
              id="product-other-types-heading"
              className="product-other-types__heading"
            >
              {heading}
            </h2>
            <p className="product-other-types__text">{description}</p>
          </div>
        </div>

        <div className="product-other-types__slider-outer">
          <div className="product-other-types__slider">
            <div className="product-other-types__viewport" ref={emblaRef}>
              <div className="product-other-types__track">
                {preparedSlides.map((product, i) => (
                  <div
                    className="product-other-types__slide"
                    key={`${product.link}-${i}`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-other-types__controls">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`product-other-types__bar ${
                    selectedIndex === index ? "is-active" : ""
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Слайд ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-other-types-bg-bottom"></div>
      </section>
      <section className="product-other-types-lines">
        <div className="product-other-types-lines-top">
          <div className="container">
            <span className="product-other-types-lines-top-left-line"></span>
            <span className="product-other-types-lines-top-right-line"></span>
          </div>
        </div>
        <div className="product-other-types-lines-bottom">
          <div className="container">
            <span className="product-other-types-lines-bottom-left-line"></span>
            <span className="product-other-types-lines-bottom-middle-line"></span>
            <span className="product-other-types-lines-bottom-right-line"></span>
          </div>
        </div>
      </section>
    </>
  );
}
