"use client";

import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import { useLanguage } from "@/Store/useLanguage";

type ProductCardItem = {
  img: string;
  subTitle: string;
  id: string;
};

type ProductHeroProps = {
  heroData: {
    breadcrums: string;
    title: string;
    subTitle: string;
    text: string;
    cards: ProductCardItem[];
  };
};

export function ProductHero({ heroData }: ProductHeroProps) {
  const { language } = useLanguage();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const width = useWindowWidth();
  const isMobile = width && width < 900;
  const labels = {
    products: language === "en" ? "products" : "продукти",
    goToDescription:
      language === "en" ? "Go to description:" : "Перейти до опису:",
  };

  useEffect(() => {
    if (isMobile) return;

    const observers: IntersectionObserver[] = [];

    heroData.cards.forEach((card) => {
      const cardElement = cardRefs.current[card.id];
      if (!cardElement || loadedVideos[card.id]) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;

          const video = document.createElement("video");
          video.src = card.img.replace(".webp", ".mp4");
          video.preload = "auto";

          video.onloadeddata = () => {
            setLoadedVideos((prev) => ({ ...prev, [card.id]: true }));
          };

          observer.disconnect();
        },
        { rootMargin: "200px" },
      );

      observer.observe(cardElement);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [heroData.cards, isMobile, loadedVideos]);

  return (
    <section className="product-hero">
      <div className="container">
        <div className="product-hero-content">
          <div className="product-hero-content-left">
            <div className="product-hero-breadcrums">
              <div className="product-hero-breadcrum">
                <IoMdArrowDropright />
                <p>{labels.products}</p>
              </div>
              <div className="product-hero-breadcrum">
                <IoMdArrowDropright />
                <p>{heroData.breadcrums}</p>
              </div>
            </div>
            <h2 className="product-hero-content-left-title">
              {heroData.title}
            </h2>
            <div className="product-hero-content-left-text">
              <h3 className="product-hero-content-left-text-subTitle">
                {heroData.subTitle}
              </h3>
              <p className="product-hero-content-left-text-text">
                {heroData.text}
              </p>
            </div>
          </div>
          <div
            className={`product-hero-content-cards ${heroData.cards.length === 1 ? "single-card" : ""}`}
          >
            {heroData.cards.slice(0, 2).map((productCard, i) => (
              <a
                ref={(element) => {
                  cardRefs.current[productCard.id] = element;
                }}
                className="product-hero-content-card"
                key={productCard.id}
                href={`#${productCard.id}`}
                aria-label={`${labels.goToDescription} ${productCard.subTitle}`}
                onMouseEnter={() =>
                  !isMobile && setHoveredCardId(productCard.id)
                }
                onMouseLeave={() => !isMobile && setHoveredCardId(null)}
              >
                <div
                  className={`product-hero-content-card-media ${hoveredCardId === productCard.id ? "product-hero-content-card-media-hover" : ""}`}
                >
                  <Image
                    src={productCard.img}
                    alt=""
                    width={1000}
                    height={1000}
                    className={`product-hero-content-card-image ${hoveredCardId === productCard.id && loadedVideos[productCard.id] ? "hide" : ""}`}
                  />

                  {loadedVideos[productCard.id] && !isMobile && (
                    <video
                      className={`product-hero-content-card-video ${hoveredCardId === productCard.id ? "show" : ""}`}
                      src={productCard.img.replace(".webp", ".mp4")}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  )}
                </div>
                <div
                  className={`product-hero-content-card-underImg ${heroData.cards.length - 1 == i && "product-hero-content-card-underImg-border-right"} `}
                >
                  <p className="product-hero-content-card-underImg-subTitle">
                    {productCard.subTitle}
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
        {heroData.cards.length > 2 && (
          <div className="product-hero-content under">
            <div className="product-hero-content-left"></div>
            <div
              className={`product-hero-content-cards ${heroData.cards.length === 1 ? "single-card" : ""}`}
            >
              {heroData.cards.slice(2).map((productCard, i) => (
                <a
                  ref={(element) => {
                    cardRefs.current[productCard.id] = element;
                  }}
                  className="product-hero-content-card"
                  key={productCard.id}
                  href={`#${productCard.id}`}
                  aria-label={`${labels.goToDescription} ${productCard.subTitle}`}
                  onMouseEnter={() =>
                    !isMobile && setHoveredCardId(productCard.id)
                  }
                  onMouseLeave={() => !isMobile && setHoveredCardId(null)}
                >
                  <div
                    className={`product-hero-content-card-media ${hoveredCardId === productCard.id ? "product-hero-content-card-media-hover" : ""}`}
                  >
                    <Image
                      src={productCard.img}
                      alt=""
                      width={1000}
                      height={1000}
                      className={`product-hero-content-card-image ${hoveredCardId === productCard.id && loadedVideos[productCard.id] ? "hide" : ""}`}
                    />

                    {loadedVideos[productCard.id] && !isMobile && (
                      <video
                        className={`product-hero-content-card-video ${hoveredCardId === productCard.id ? "show" : ""}`}
                        src={productCard.img.replace(".webp", ".mp4")}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    )}
                  </div>
                  <div
                    className={`product-hero-content-card-underImg ${heroData.cards.length - 1 == i && ""} `}
                  >
                    <p className="product-hero-content-card-underImg-subTitle">
                      {productCard.subTitle}
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
        )}
      </div>
    </section>
  );
}
