"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/Components/MainPage/Products/ProductCard/ProductCard";
import type { ProductItem } from "@/Components/MainPage/Products/Products";
import { products as defaultProducts } from "@/Components/MainPage/Products/Products";
import { useLanguage } from "@/Store/useLanguage";
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
const DEFAULT_HEADING_EN = "Our Other Product Types";
const DEFAULT_DESCRIPTION_EN =
  "Discover the HYLEN product line: from trailers and transfer equipment to tanks and soil cultivation machinery - choose the right solution for your operation.";

export function ProductOtherTypesSlider({
  items,
  excludeLink,
  heading,
  description,
}: ProductOtherTypesSliderProps) {
  const { language } = useLanguage();
  const localizedItems: ProductItem[] =
    language === "en"
      ? [
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
        ]
      : defaultProducts;

  const resolvedItems = items ?? localizedItems;
  const resolvedHeading =
    heading ??
    (language === "en" ? DEFAULT_HEADING_EN : DEFAULT_HEADING);
  const resolvedDescription =
    description ??
    (language === "en" ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION);

  const slides = useMemo(() => {
    if (!excludeLink) return resolvedItems;
    const filtered = resolvedItems.filter((p) => p.link !== excludeLink);
    return filtered.length ? filtered : resolvedItems;
  }, [resolvedItems, excludeLink]);

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
      <section className="product-other-types-lines product-other-types-lines--top">
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
              {resolvedHeading}
            </h2>
            <p className="product-other-types__text">{resolvedDescription}</p>
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
                  aria-label={`${language === "en" ? "Slide" : "Слайд"} ${index + 1}`}
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
      <section className="product-other-types-lines product-other-types-lines--bottom">
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
