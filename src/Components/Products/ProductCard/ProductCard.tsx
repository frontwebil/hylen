"use client";

import Image from "next/image";
import { ProductItem } from "../Products";
import "./style.css";
import Link from "next/link";
import { useState } from "react";

export function ProductCard({ product }: { product: ProductItem }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={"/"}
      className="product-card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={`${product.img}${isHover ? ".gif" : ".webp"}`}
        width={1000}
        height={300}
        alt="Фото продукту"
      />
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
