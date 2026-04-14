import Image from "next/image";
import { ProductCard } from "./ProductCard/ProductCard";
import "./style.css";

export type ProductItem = {
  title: string;
  subTitle: string;
  img: string;
};

export const products: ProductItem[] = [
  {
    title: "ХРЕБЕТ У ПОЛІ",
    subTitle: "Одноосні причіпи",
    img: "/Products/1",
  },
  {
    title: "РИТМ ЖИВЛЕННЯ",
    subTitle: "Кормороздавачі-змішувачі",
    img: "/Products/2",
  },
  {
    title: "МІСТ МІЖ ЛАНКАМИ",
    subTitle: "Перевантажувачі зерна",
    img: "/Products/3",
  },
  {
    title: "ЖИВА АРТЕРІЯ",
    subTitle: "Цистерни для води та пального",
    img: "/Products/4",
  },
  {
    title: "ТЯГОВИЙ ВУЗОЛ",
    subTitle: "Причіпи-напівпричіпи",
    img: "/Products/5",
  },
  {
    title: "ОСНОВИ ВРОЖАЮ",
    subTitle: "Ґрунтообробна техніка",
    img: "/Products/6",
  },
];

export function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products-title">
          <Image
            src={"/Products/title-icon.svg"}
            width={8}
            height={6}
            alt="icon"
          />
          <h4>продукти</h4>
        </div>
        <div className="products-grid">
          {products.map((el, i) => (
            <ProductCard product={el} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
