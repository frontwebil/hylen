import Image from "next/image";
import { ProductItem } from "../Products";
import "./style.css";

export function ProductCard({ product }: { product: ProductItem }) {
  return <div className="product-card">
    <Image src={`${product.img}.webp`} width={1000} height={300} alt="Фото продукту" />
    <div className="product-card-flex">
      <div className="">{product.title}</div>
      <div className=""></div>
    </div>
  </div>;
}
