"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { UnderProductLine } from "../UnderProductLine/UnderProductLine";
import { UnderProductTopLine } from "../UnderProductTopLine/UnderProductTopLine";
import { useLanguage } from "@/Store/useLanguage";
import {
  LocalizedField,
  LocalizedListField,
  pickLocale,
  pickLocaleList,
} from "@/Types/productData";

type ProductItem = {
  title: LocalizedField;
  modelCards: LocalizedListField;
  images: string[];
  video?: string;
  videoPreview?: string;
  isCustomDesign?: boolean;
  description: {
    about: LocalizedField;
    purpose: LocalizedField;
    features: LocalizedField;
    advantages: LocalizedListField;
  };
};

export function ProductSections({
  productData,
  showTopLine = true,
}: {
  productData: ProductItem;
  showTopLine?: boolean;
}) {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const width = useWindowWidth();
  const copy = {
    modelListAria: language === "en" ? "Models" : "Моделі",
    customDesign:
      language === "en"
        ? "custom design and manufacturing"
        : "індивідуальне проєктування та виконання виробу",
    prevSlide: language === "en" ? "Previous slide" : "Попередній слайд",
    nextSlide: language === "en" ? "Next slide" : "Наступний слайд",
    madeInUkraine:
      language === "en"
        ? "This equipment is part of the Made in Ukraine programme and qualifies for up to 25% compensation from the Ministry of Economy."
        : "Ця техніка входить у програму «Зроблено в Україні» з можливістю отримання компенсації 25% від вартості через Міністерство економіки.",
    description: language === "en" ? "Description" : "Опис",
    purpose: language === "en" ? "Purpose" : "Призначення",
    features: language === "en" ? "Features" : "Особливості",
    advantages: language === "en" ? "Advantages:" : "Переваги:",
  };

  const slides = [
    ...(productData.video
      ? [
          {
            type: "video" as const,
            src: productData.video,
            preview: productData.videoPreview ?? productData.images[0],
          },
        ]
      : []),
    ...productData.images.map((image) => ({
      type: "image" as const,
      src: image,
    })),
  ];

  const lastSlideIndex = slides.length - 1;
  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === lastSlideIndex;
  const visibleSlidesStart = Math.max(
    0,
    Math.min(activeSlide - 1, Math.max(slides.length - 3, 0)),
  );
  const visibleSlides = slides.slice(
    visibleSlidesStart,
    visibleSlidesStart + 3,
  );

  const handlePrevSlide = () => {
    if (isFirstSlide) return;
    setActiveSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (isLastSlide) return;
    setActiveSlide((prev) => prev + 1);
  };

  const modelCardsList = pickLocaleList(productData.modelCards, language);
  const advantagesList = pickLocaleList(
    productData.description.advantages,
    language,
  );

  const modelCardsRow = (
    <div className="product-model-cards" role="list" aria-label={copy.modelListAria}>
      {modelCardsList.map((label) => (
        <div key={label} className="product-model-card" role="listitem">
          {label}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {showTopLine && <UnderProductTopLine />}
      <section className="product-sections">
        <div className="container">
          <div className="product-left">
            <div className="product-slider">
              {width && width < 980 && (
                <>
                  {" "}
                  <h3>{pickLocale(productData.title, language)}</h3>
                  {modelCardsRow}
                </>
              )}
              <div className="product-slider-main-img">
                {slides[activeSlide]?.type === "video" ? (
                  <video
                    key={slides[activeSlide].src}
                    src={slides[activeSlide].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    className="product-slider-main-video"
                  />
                ) : (
                  <Image
                    src={slides[activeSlide].src}
                    alt={`Slide ${activeSlide + 1}`}
                    width={1000}
                    height={1000}
                  />
                )}
                {productData.isCustomDesign && (
                  <div className="product-slider-custom-note">
                    <div className="product-slider-custom-note-img">
                      <Image
                        src={"/icons/black-vector-cube.svg"}
                        width={20}
                        height={20}
                        alt="🧊"
                      />
                    </div>
                    <p className="product-slider-custom-note-text">
                      {copy.customDesign}
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`product-slider-controls ${isFirstSlide ? "is-first-slide" : ""} ${isLastSlide ? "is-last-slide" : ""}`}
              >
                <button
                  type="button"
                  className={`product-slider-control-btn ${isFirstSlide ? "disabled" : ""}`}
                  onClick={handlePrevSlide}
                  disabled={isFirstSlide}
                  aria-label={copy.prevSlide}
                >
                  <FaArrowLeft className="product-slider-control-left" />
                </button>

                <div className="product-slider-controls-slides">
                  {visibleSlides.map((slide, i) => {
                    const realIndex = visibleSlidesStart + i;
                    return (
                      <div
                        className={`product-slider-controls-slide ${activeSlide === realIndex ? "active" : ""}`}
                        key={`${slide.type}-${slide.src}`}
                        onClick={() => setActiveSlide(realIndex)}
                      >
                        {slide.type === "video" ? (
                          <div className="product-slider-controls-video-thumb">
                            <Image
                              src={slide.preview}
                              alt="video preview"
                              width={200}
                              height={200}
                            />
                          </div>
                        ) : (
                          <Image
                            src={slide.src}
                            alt={`slide ${realIndex + 1}`}
                            width={200}
                            height={200}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={`product-slider-control-btn ${isLastSlide ? "disabled" : ""}`}
                  onClick={handleNextSlide}
                  disabled={isLastSlide}
                  aria-label={copy.nextSlide}
                >
                  <FaArrowRight className="product-slider-control-right" />
                </button>
              </div>

              {/* {width && width < 980 && modelCardsRow} */}

              <div className="product-slider-alert">
                <Image
                  src={"/icons/made-in-ukraine.png"}
                  width={300}
                  height={300}
                  alt="Made in Ukraine"
                  className="product-slider-alert-made-in-ukraine"
                />
                <p>
                  {copy.madeInUkraine}
                </p>
              </div>
            </div>
          </div>

          <div className="product-right">
            {width && width >= 980 && (
              <>
                <h3>{pickLocale(productData.title, language)}</h3>
                {modelCardsRow}
              </>
            )}
            <div className="product-right-text">
              <div className="product-right-text-content">
                <h2>{copy.description}</h2>
                <p>{pickLocale(productData.description.about, language)}</p>
              </div>
              <div className="product-right-text-content">
                <h2>{copy.purpose}</h2>
                <p>{pickLocale(productData.description.purpose, language)}</p>
              </div>
              <div className="product-right-text-content">
                <h2>{copy.features}</h2>
                <p>{pickLocale(productData.description.features, language)}</p>
              </div>
              <div className="product-right-text-content">
                <h2>{copy.advantages}</h2>
                <div className="product-right-text-content-list">
                  {advantagesList.map((item, i) => (
                    <div
                      key={i}
                      className="product-right-text-content-list-item"
                    >
                      <p>•</p>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UnderProductLine />
    </>
  );
}
