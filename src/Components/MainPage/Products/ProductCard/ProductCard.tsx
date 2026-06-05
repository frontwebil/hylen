"use client";

import Image from "next/image";
import { ProductItem } from "../Products";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import { useWindowWidth } from "@/Hooks/useWindowWidth";

export function ProductCard({
  product,
  staticPreview = false,
}: {
  product: ProductItem;
  staticPreview?: boolean;
}) {
  const [isHover, setIsHover] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const width = useWindowWidth();
  const isMobile = width != null && width < 900;
  const showVideo = isHover && !isMobile && !staticPreview;

  const handleMouseEnter = () => {
    if (staticPreview || isMobile) return;
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIsVideoReady(false);
  };

  return (
    <Link
      href={product.link}
      className={
        staticPreview ? "product-card product-card--static" : "product-card"
      }
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="product-card-media">
        <Image
          src={`${product.img}.webp`}
          width={1000}
          height={300}
          alt="Фото продукту"
          className={`product-card-image ${isHover && isVideoReady ? "hide" : ""}`}
        />

        {showVideo && (
          <video
            className={`product-card-video ${isVideoReady ? "show" : ""}`}
            src={`${product.img}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
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
