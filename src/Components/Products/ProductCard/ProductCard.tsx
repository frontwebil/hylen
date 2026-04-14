"use client";

import Image from "next/image";
import { ProductItem } from "../Products";
import "./style.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ProductCard({ product }: { product: ProductItem }) {
  const [isHover, setIsHover] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const video = document.createElement("video");
          video.src = `${product.img}.mp4`;
          video.preload = "auto";

          video.onloadeddata = () => {
            setIsLoaded(true);
          };

          observer.disconnect();
        }
      },
      { rootMargin: "200px" }, // трохи раніше підгружає
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [product.img]);

  return (
    <Link
      ref={cardRef}
      href={"/"}
      className="product-card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="product-card-media">
        {/* IMAGE */}
        <Image
          src={`${product.img}.webp`}
          width={1000}
          height={300}
          alt="Фото продукту"
          className={`product-card-image ${isHover && isLoaded ? "hide" : ""}`}
        />

        {/* VIDEO */}
        {isLoaded && (
          <video
            className={`product-card-video ${isHover ? "show" : ""}`}
            src={`${product.img}.webm`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </div>

      <div className="product-card-flex">
        <div className="product-card-flex-title">{product.title}</div>
        <div className="product-card-icon">
          <Image
            src={"/Products/card-icon.svg"}
            width={22}
            height={22}
            alt="=>"
          />
        </div>
      </div>

      <div className="product-card-subtitle">{product.subTitle}</div>
    </Link>
  );
}
