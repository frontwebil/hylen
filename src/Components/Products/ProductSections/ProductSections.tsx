"use client";

import { ProductItem } from "@/app/hrebet-y-poli/page";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

export function ProductSections({ productData }: { productData: ProductItem }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const lastSlideIndex = productData.images.length - 1;
  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === lastSlideIndex;

  const handlePrevSlide = () => {
    if (isFirstSlide) return;
    setActiveSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (isLastSlide) return;
    setActiveSlide((prev) => prev + 1);
  };

  return (
    <section className="product-sections">
      <div className="container">
        <div className="product-left">
          <div className="product-slider">
            <div className="product-slider-main-img">
              <Image
                src={productData.images[activeSlide]}
                alt={`Slide ${activeSlide + 1}`}
                width={1000}
                height={1000}
              />
            </div>

            <div
              className={`product-slider-controls ${isFirstSlide ? "is-first-slide" : ""} ${isLastSlide ? "is-last-slide" : ""}`}
            >
              <button
                type="button"
                className={`product-slider-control-btn ${isFirstSlide ? "disabled" : ""}`}
                onClick={handlePrevSlide}
                disabled={isFirstSlide}
                aria-label="Попередній слайд"
              >
                <FaArrowLeft className="product-slider-control-left" />
              </button>

              <div className="product-slider-controls-slides">
                {productData.images.map((image, i) => (
                  <div
                    className={`product-slider-controls-slide ${activeSlide === i ? "active" : ""}`}
                    key={i}
                    onClick={() => setActiveSlide(i)}
                  >
                    <Image
                      src={image}
                      alt={`slide ${i + 1}`}
                      width={200}
                      height={200}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`product-slider-control-btn ${isLastSlide ? "disabled" : ""}`}
                onClick={handleNextSlide}
                disabled={isLastSlide}
                aria-label="Наступний слайд"
              >
                <FaArrowRight className="product-slider-control-right" />
              </button>
            </div>

            <div className="product-slider-alert">
              <p>
                Ця техніка входить у програму «Зроблено в Україні» з можливістю
                отримання компенсації 25% від вартості через Міністерство
                економіки.
              </p>
            </div>
          </div>
        </div>

        <div className="product-right">
          <h3>{productData.title}</h3>
          <h4>
            <span className="font-semibold">Модельний ряд:</span> {productData.subTitle}
          </h4>
          <div className="product-right-text">
            <div className="product-right-text-content">
              <h2>Опис</h2>
              <p>{productData.description.about}</p>
            </div>
            <div className="product-right-text-content">
              <h2>Призначення</h2>
              <p>{productData.description.purpose}</p>
            </div>
            <div className="product-right-text-content">
              <h2>Особливості</h2>
              <p>{productData.description.features}</p>
            </div>
            <div className="product-right-text-content">
              <h2>Переваги:</h2>
              <div className="product-right-text-content-list">
                {productData.description.advantages.map((item, i) => (
                  <p key={i}>•ㅤ{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
